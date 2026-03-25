import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  seoData,
  SEOTopicEntry,
  loadCustomTopics,
  saveCustomTopics,
} from "@/seo/seoData";
import { Language, languageNames } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Plus,
  Trash2,
  Tag,
  Globe,
  Eye,
  ChevronRight,
} from "lucide-react";

const LANGUAGES: Language[] = ["en", "ka", "ru", "zh", "es", "it"];

function generateId(): string {
  return `topic_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function SERPPreview({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 text-left font-sans">
      <p className="text-xs text-gray-500 mb-0.5 truncate">{url}</p>
      <p className="text-[#1a0dab] text-lg font-normal leading-snug truncate hover:underline cursor-pointer">
        {title || "Page Title"}
      </p>
      <p className="text-sm text-gray-700 mt-1 line-clamp-2">
        {description || "Page description will appear here…"}
      </p>
    </div>
  );
}

function TopicCard({
  topic,
  onDelete,
}: {
  topic: SEOTopicEntry;
  onDelete: () => void;
}) {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm font-medium leading-snug">
            {topic.title}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 shrink-0 text-muted-foreground hover:text-destructive"
            onClick={onDelete}
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-xs text-muted-foreground">{topic.description}</p>
        <div className="flex flex-wrap gap-1">
          {topic.keywords.map((kw) => (
            <Badge key={kw} variant="secondary" className="text-xs">
              {kw}
            </Badge>
          ))}
        </div>
        <p className="text-[10px] text-muted-foreground">
          Added {new Date(topic.createdAt).toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  );
}

function AddTopicForm({
  language,
  onAdd,
}: {
  language: Language;
  onAdd: (topic: SEOTopicEntry) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywordInput, setKeywordInput] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  const addKeyword = () => {
    const kw = keywordInput.trim();
    if (kw && !keywords.includes(kw)) {
      setKeywords([...keywords, kw]);
      setKeywordInput("");
    }
  };

  const removeKeyword = (kw: string) => {
    setKeywords(keywords.filter((k) => k !== kw));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addKeyword();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      id: generateId(),
      title: title.trim(),
      description: description.trim(),
      keywords,
      createdAt: new Date().toISOString(),
    });
    setTitle("");
    setDescription("");
    setKeywords([]);
    setKeywordInput("");
    setShowPreview(false);
  };

  const BASE_URL = "https://an1no.github.io/luxedrive-georgia-landing";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-medium text-foreground">
          SEO Title
          <span className="ml-1 text-muted-foreground">
            ({title.length}/60)
          </span>
        </label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter page title for search engines…"
          maxLength={60}
          className="bg-background"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-foreground">
          Meta Description
          <span className="ml-1 text-muted-foreground">
            ({description.length}/160)
          </span>
        </label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a compelling description that appears in search results…"
          maxLength={160}
          rows={3}
          className="bg-background resize-none"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-foreground">
          Keywords
        </label>
        <div className="flex gap-2">
          <Input
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type keyword, press Enter or comma…"
            className="bg-background"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addKeyword}
            className="shrink-0"
          >
            <Plus className="h-3.5 w-3.5" />
          </Button>
        </div>
        {keywords.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {keywords.map((kw) => (
              <Badge
                key={kw}
                variant="secondary"
                className="cursor-pointer text-xs hover:bg-destructive/20"
                onClick={() => removeKeyword(kw)}
              >
                {kw} ×
              </Badge>
            ))}
          </div>
        )}
        <p className="text-[11px] text-muted-foreground">
          Press Enter or comma to add. Click a keyword to remove it.
        </p>
      </div>

      {(title || description) && (
        <div className="space-y-2">
          <button
            type="button"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            onClick={() => setShowPreview(!showPreview)}
          >
            <Eye className="h-3.5 w-3.5" />
            {showPreview ? "Hide" : "Show"} SERP Preview
            <ChevronRight
              className={`h-3.5 w-3.5 transition-transform ${showPreview ? "rotate-90" : ""}`}
            />
          </button>
          {showPreview && (
            <SERPPreview
              title={title}
              description={description}
              url={BASE_URL}
            />
          )}
        </div>
      )}

      <Button
        type="submit"
        disabled={!title.trim()}
        className="w-full bg-gold hover:bg-gold/90 text-charcoal font-semibold"
      >
        <Plus className="h-4 w-4 mr-1.5" />
        Add SEO Topic
      </Button>
    </form>
  );
}

function LanguageTab({ lang }: { lang: Language }) {
  const [customTopics, setCustomTopics] = useState<
    Record<Language, SEOTopicEntry[]>
  >(() => loadCustomTopics());

  const builtinData = seoData[lang];
  const custom = customTopics[lang] || [];

  const handleAdd = (topic: SEOTopicEntry) => {
    const updated = {
      ...customTopics,
      [lang]: [...(customTopics[lang] || []), topic],
    };
    setCustomTopics(updated);
    saveCustomTopics(updated);
  };

  const handleDelete = (id: string) => {
    const updated = {
      ...customTopics,
      [lang]: (customTopics[lang] || []).filter((t) => t.id !== id),
    };
    setCustomTopics(updated);
    saveCustomTopics(updated);
  };

  return (
    <div className="space-y-6">
      {/* Current SEO Overview */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Globe className="h-4 w-4 text-gold" />
          Current SEO Configuration
        </div>
        <div className="rounded-lg border border-border bg-muted/30 p-3 space-y-2">
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-0.5">
              Title
            </p>
            <p className="text-xs font-medium">{builtinData.title}</p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-0.5">
              Description
            </p>
            <p className="text-xs text-muted-foreground">
              {builtinData.description}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-0.5">
              Keywords ({builtinData.keywords.length})
            </p>
            <div className="flex flex-wrap gap-1">
              {builtinData.keywords.map((kw) => (
                <Badge key={kw} variant="outline" className="text-[10px]">
                  {kw}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Topics */}
      {custom.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Tag className="h-4 w-4 text-gold" />
            Custom Topics ({custom.length})
          </div>
          <div className="space-y-2">
            {custom.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                onDelete={() => handleDelete(topic.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Add New Topic */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Plus className="h-4 w-4 text-gold" />
          Add New SEO Topic
        </div>
        <AddTopicForm language={lang} onAdd={handleAdd} />
      </div>
    </div>
  );
}

export function SEOTopicSkill() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Language>(language);

  useEffect(() => {
    setActiveTab(language);
  }, [language]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="fixed bottom-6 right-6 z-50 h-10 gap-2 rounded-full border-gold/40 bg-charcoal/90 text-gold shadow-lg backdrop-blur-sm hover:bg-gold hover:text-charcoal transition-all"
          aria-label="Open SEO Topic Manager"
        >
          <Search className="h-4 w-4" />
          <span className="text-xs font-semibold">SEO</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg">
            <Search className="h-5 w-5 text-gold" />
            SEO Topic Manager
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            View and manage SEO topics across all languages. Custom topics are
            saved locally and merged into the active metadata.
          </p>
        </DialogHeader>

        <Tabs
          value={activeTab}
          onValueChange={(v) => setActiveTab(v as Language)}
          className="mt-2"
        >
          <TabsList className="grid grid-cols-6 w-full h-auto gap-1 bg-muted p-1">
            {LANGUAGES.map((lang) => (
              <TabsTrigger
                key={lang}
                value={lang}
                className="text-xs py-1.5 data-[state=active]:bg-gold data-[state=active]:text-charcoal"
              >
                {lang.toUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>

          {LANGUAGES.map((lang) => (
            <TabsContent key={lang} value={lang} className="mt-4">
              <div className="mb-3 flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {languageNames[lang]}
                </span>
              </div>
              <LanguageTab lang={lang} />
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
