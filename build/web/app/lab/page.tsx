"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LabPage() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFetch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(`/api/fetch-document?url=${encodeURIComponent(url)}`);
      if (!res.ok) throw new Error("Failed to fetch document");
      const text = await res.text();
      setResult(text);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center p-4">
      <Card className="glass-card w-full max-w-xl">
        <CardHeader>
          <CardTitle>Document Retrieval Portal</CardTitle>
          <CardDescription>
            Securely retrieve business documents from approved sources. Enter a document URL below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFetch} className="flex flex-col gap-4">
            <input
              type="url"
              required
              className="input input-bordered w-full rounded-md p-2 bg-background text-foreground border border-border"
              placeholder="https://example.com/document.pdf"
              value={url}
              onChange={e => setUrl(e.target.value)}
              aria-label="Document URL"
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Fetching..." : "Fetch Document"}
            </Button>
          </form>
          {error && <div className="text-red-400 mt-4" role="alert">{error}</div>}
          {result && (
            <pre className="mt-4 p-2 rounded bg-muted text-xs overflow-x-auto max-h-60" aria-label="Document Content">{result}</pre>
          )}
        </CardContent>
        <CardFooter>
          <span className="text-muted-foreground text-xs">For authorized use only. All access is logged.</span>
        </CardFooter>
      </Card>
    </main>
  );
} 