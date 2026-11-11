"use client";

import { FileDown, FileText, Download } from "lucide-react";
import { downloadableDocuments } from "./documentsConfig";
import { Card, CardGrid, PageHero, PageShell, IconChip } from "../components/fx";

export default function DocumentsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Downloads"
        title="Downloadable Documents"
        subtitle="Proposals & response documents available for download."
        icons={[
          { icon: FileText, motionType: "float" },
          { icon: FileDown, motionType: "pulse" },
        ]}
        mascot="archivist"
      />
      <CardGrid className="grid gap-5">
        {downloadableDocuments.map((doc) => (
          <Card key={doc.id}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <IconChip icon={FileText} motionType="float" />
                <div>
                  <span className="mb-2 inline-block rounded-full border border-navy-200 bg-navy-50 px-2.5 py-0.5 font-heading text-xs font-semibold text-navy-700">
                    {doc.category}
                  </span>
                  <h2 className="font-display text-lg font-bold text-navy-700">{doc.title}</h2>
                  <p className="mt-0.5 text-sm text-gray-500">{doc.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">{doc.description}</p>
                </div>
              </div>
              <a
                href={doc.fileUrl}
                download
                className="group/dl flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-navy-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-navy-700 hover:shadow-lg"
              >
                <Download size={16} className="transition-transform group-hover/dl:translate-y-0.5" />
                {doc.fileLabel}
              </a>
            </div>
          </Card>
        ))}
      </CardGrid>
    </PageShell>
  );
}
