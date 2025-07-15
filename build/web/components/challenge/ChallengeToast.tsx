"use client";
import React, { useState } from "react";
import { getMetadata } from "@/lib/metadata";

// Icônes simplifiées (remplace lucide-react)
const Target = () => <span className="text-orange-400">🎯</span>;
const Database = () => <span className="text-blue-400">💾</span>;
const Award = () => <span className="text-yellow-400">🏆</span>;
const Close = () => <span className="text-gray-400 hover:text-white cursor-pointer">✕</span>;

export function ChallengeToast() {
    const { challenge } = getMetadata();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed bottom-4 left-4 z-50">
            {!isExpanded ? (
                // Floating question mark icon
                <button
                    onClick={() => setIsExpanded(true)}
                    className="w-12 h-12 bg-black border border-neutral-700 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 ease-out"
                    title="View Challenge"
                >
                    <span className="text-white text-lg font-bold">?</span>
                </button>
            ) : (
                // Expanded challenge details
                <div className="w-80 bg-black border border-neutral-900 rounded-lg shadow-xl p-4 animate-in slide-in-from-bottom-2 duration-300 ease-out">
                    {/* Header with title and close button */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                            <Target />
                            <h3 className="font-semibold text-sm text-white">{challenge.title}</h3>
                        </div>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="flex items-center justify-center w-6 h-6 hover:bg-gray-700 rounded transition-colors"
                        >
                            <Close />
                        </button>
                    </div>
                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed mb-3">{challenge.description}</p>
                    {/* Skills */}
                    <div className="flex flex-col gap-2 mb-3">
                        <div className="flex items-center gap-1">
                            <Database />
                            <span className="text-xs font-medium text-gray-400">Skills:</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {challenge.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center rounded-full border border-neutral-900 px-2 py-0.5 text-xs font-medium text-gray-300 bg-gray-800 hover:bg-gray-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Points and Status */}
                    <div className="flex items-center justify-between pt-2 border-t border-neutral-900">
                        <div className="flex items-center gap-2">
                            <Award />
                            <span className="text-sm font-semibold text-yellow-400">{challenge.points} points</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}