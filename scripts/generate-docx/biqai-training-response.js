/**
 * Generates the BIQAI Training & Certification Response .docx from its
 * editable content source at /content/documents/biqai-training-response.json.
 *
 * Usage: npm run generate:docx
 * (re-run any time the JSON content source is edited)
 */

const fs = require("fs");
const path = require("path");
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
  ShadingType,
  Header,
  Footer,
  PageNumber,
  VerticalAlign,
} = require("docx");

const NAVY = "1F3864";
const STEEL_BLUE = "2E5395";
const TEXT_DARK = "1F2937";
const TEXT_MUTED = "4B5563";
const ROW_SHADE_ALT = "EEF2F8";
const ROW_SHADE_BASE = "FFFFFF";
const BORDER_COLOR = "C9D3E0";

const contentPath = path.join(__dirname, "..", "..", "content", "documents", "biqai-training-response.json");
const outputDir = path.join(__dirname, "..", "..", "public", "documents");

const content = JSON.parse(fs.readFileSync(contentPath, "utf8"));

const cellBorder = {
  top: { style: BorderStyle.SINGLE, size: 2, color: BORDER_COLOR },
  bottom: { style: BorderStyle.SINGLE, size: 2, color: BORDER_COLOR },
  left: { style: BorderStyle.SINGLE, size: 2, color: BORDER_COLOR },
  right: { style: BorderStyle.SINGLE, size: 2, color: BORDER_COLOR },
};

function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 4 } },
    children: [new TextRun({ text, bold: true, size: 30, color: NAVY })],
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
    children: [new TextRun({ text, bold: true, size: 24, color: STEEL_BLUE })],
  });
}

function heading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100 },
    children: [new TextRun({ text, bold: true, size: 20, color: STEEL_BLUE })],
  });
}

function paragraph(text) {
  return new Paragraph({
    spacing: { after: 160 },
    children: [new TextRun({ text, size: 20, color: TEXT_DARK })],
  });
}

function bullets(items) {
  return items.map(
    (item) =>
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 80 },
        children: [new TextRun({ text: item, size: 19, color: TEXT_MUTED })],
      })
  );
}

function headerCell(text) {
  return new TableCell({
    shading: { type: ShadingType.CLEAR, fill: NAVY },
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    borders: cellBorder,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, size: 19, color: "FFFFFF" })] })],
  });
}

function bodyCell(text, shaded) {
  return new TableCell({
    shading: shaded ? { type: ShadingType.CLEAR, fill: ROW_SHADE_ALT } : { type: ShadingType.CLEAR, fill: ROW_SHADE_BASE },
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    borders: cellBorder,
    children: [new Paragraph({ children: [new TextRun({ text, size: 18, color: TEXT_DARK })] })],
  });
}

function dataTable(columns, rows) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({ tableHeader: true, children: columns.map((c) => headerCell(c)) }),
      ...rows.map(
        (row, i) =>
          new TableRow({
            children: row.map((cell) => bodyCell(cell, i % 2 === 1)),
          })
      ),
    ],
  });
}

function renderBlock(block) {
  switch (block.type) {
    case "paragraph":
      return [paragraph(block.text)];
    case "heading3":
      return [heading3(block.text)];
    case "bullets":
      return bullets(block.items);
    case "table":
      return [dataTable(block.columns, block.rows), new Paragraph({ spacing: { after: 160 }, children: [] })];
    default:
      return [];
  }
}

const children = [];

children.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [new TextRun({ text: content.meta.subtitle, bold: true, size: 30, color: NAVY })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 320 },
    children: [new TextRun({ text: content.meta.byline, italics: true, size: 20, color: TEXT_MUTED })],
  })
);

for (const section of content.sections) {
  children.push(heading1(section.heading));
  for (const sub of section.subsections) {
    children.push(heading2(sub.heading));
    for (const block of sub.blocks) {
      children.push(...renderBlock(block));
    }
  }
}

if (content.note) {
  children.push(
    new Paragraph({
      spacing: { before: 240 },
      children: [new TextRun({ text: content.note, italics: true, size: 18, color: TEXT_MUTED })],
    })
  );
}

const doc = new Document({
  sections: [
    {
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR, space: 4 } },
              children: [new TextRun({ text: content.meta.headerText, size: 16, color: TEXT_MUTED, bold: true })],
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: "Page ", size: 16, color: TEXT_MUTED }),
                new TextRun({ children: [PageNumber.CURRENT], size: 16, color: TEXT_MUTED }),
                new TextRun({ text: " of ", size: 16, color: TEXT_MUTED }),
                new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 16, color: TEXT_MUTED }),
              ],
            }),
          ],
        }),
      },
      children,
    },
  ],
});

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });
  const buffer = await Packer.toBuffer(doc);
  const outputPath = path.join(outputDir, content.meta.outputFileName);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated ${path.relative(process.cwd(), outputPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
