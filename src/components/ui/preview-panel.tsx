import React from 'react';

interface PreviewPanelProps {
    title?: string;
    children?: React.ReactNode;
}

export function PreviewPanel({
    title = "Live Preview",
    children
}: PreviewPanelProps) {
    return (
        <div className="bg-slate-800 rounded-2xl shadow-xl border border-slate-700 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">
                    {title}
                </h2>
            </div>
            {children}
        </div>
    );
}
