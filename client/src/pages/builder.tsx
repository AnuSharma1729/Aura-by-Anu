import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Zap, ArrowLeft, Save, Download, Plus, Trash2, Briefcase, GraduationCap, User, FileText, Target } from "lucide-react";

// --- Zod Schemas ---
const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone is required"),
  linkedin: z.string().optional(),
  portfolio: z.string().optional(),
  summary: z.string().max(500, "Keep summary concise").optional(),
});

const experienceSchema = z.object({
  title: z.string().min(2),
  company: z.string().min(2),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string(),
});

// --- Types ---
type PersonalInfo = z.infer<typeof personalInfoSchema>;
type Experience = z.infer<typeof experienceSchema>;

export default function Builder() {
  const [activeStep, setActiveStep] = useState("personal");
  
  // --- State ---
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: "Alex Morgan",
    email: "alex.morgan@example.com",
    phone: "(555) 123-4567",
    linkedin: "linkedin.com/in/alexmorgan",
    summary: "Detail-oriented software professional with 5+ years of experience in building scalable web applications. Proven track record of improving system performance and leading cross-functional teams."
  });

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      title: "Senior Frontend Developer",
      company: "TechFlow Inc.",
      startDate: "2021-03",
      current: true,
      description: "Led the migration of legacy codebase to React 18, improving load times by 40%.\nMentored 3 junior developers and established code quality standards.\nCollaborated with UX team to redesign core product dashboard."
    }
  ]);

  const [education, setEducation] = useState([
    {
      degree: "B.S. Computer Science",
      school: "University of Technology",
      year: "2018"
    }
  ]);

  const [jobDescription, setJobDescription] = useState("");

  // --- Handlers ---
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const addExperience = () => {
    setExperiences([...experiences, { title: "", company: "", startDate: "", current: false, description: "" }]);
  };

  const updateExperience = (index: number, field: keyof Experience, value: any) => {
    const newExp = [...experiences];
    newExp[index] = { ...newExp[index], [field]: value };
    setExperiences(newExp);
  };

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  // --- Render ---
  return (
    <div className="h-screen flex flex-col bg-background font-sans overflow-hidden">
      {/* Builder Header */}
      <header className="h-14 border-b flex items-center justify-between px-4 sm:px-6 bg-white z-20 shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          </Link>
          <div className="h-6 w-px bg-border mx-2" />
          <div className="flex items-center text-sm font-medium">
            <Zap className="h-4 w-4 text-primary mr-2" />
            <span className="hidden sm:inline">Untitled Resume</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Save className="h-4 w-4" /> <span className="hidden sm:inline">Save</span>
          </Button>
          <Button size="sm" className="gap-2">
            <Download className="h-4 w-4" /> Export PDF
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel: Form Inputs */}
        <div className="w-full lg:w-1/2 flex flex-col border-r bg-slate-50/50">
          <div className="px-6 py-4 border-b bg-white">
            <Tabs value={activeStep} onValueChange={setActiveStep} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal"><User className="h-4 w-4 mr-2 hidden sm:inline" />Info</TabsTrigger>
                <TabsTrigger value="experience"><Briefcase className="h-4 w-4 mr-2 hidden sm:inline" />Work</TabsTrigger>
                <TabsTrigger value="education"><GraduationCap className="h-4 w-4 mr-2 hidden sm:inline" />Edu</TabsTrigger>
                <TabsTrigger value="match"><Target className="h-4 w-4 mr-2 hidden sm:inline" />Match</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <ScrollArea className="flex-1 p-6">
            <div className="max-w-2xl mx-auto space-y-8 pb-20">
              
              {activeStep === "personal" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">Personal Information</h2>
                    <p className="text-muted-foreground">How recruiters will contact you.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input name="fullName" value={personalInfo.fullName} onChange={handlePersonalInfoChange} />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input name="email" value={personalInfo.email} onChange={handlePersonalInfoChange} />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone</Label>
                      <Input name="phone" value={personalInfo.phone} onChange={handlePersonalInfoChange} />
                    </div>
                    <div className="space-y-2">
                      <Label>LinkedIn URL</Label>
                      <Input name="linkedin" value={personalInfo.linkedin} onChange={handlePersonalInfoChange} />
                    </div>
                    <div className="col-span-full space-y-2">
                      <Label>Professional Summary</Label>
                      <Textarea 
                        name="summary" 
                        value={personalInfo.summary} 
                        onChange={handlePersonalInfoChange} 
                        placeholder="Briefly describe your professional background..."
                        className="h-32"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeStep === "experience" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Work History</h2>
                      <p className="text-muted-foreground">Your relevant experience.</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={addExperience}>
                      <Plus className="h-4 w-4 mr-2" /> Add Role
                    </Button>
                  </div>
                  
                  <div className="space-y-8">
                    {experiences.map((exp, index) => (
                      <Card key={index} className="relative">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
                          onClick={() => removeExperience(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Job Title</Label>
                              <Input 
                                value={exp.title} 
                                onChange={(e) => updateExperience(index, "title", e.target.value)} 
                                placeholder="e.g. Product Manager"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Company</Label>
                              <Input 
                                value={exp.company} 
                                onChange={(e) => updateExperience(index, "company", e.target.value)} 
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Start Date</Label>
                              <Input 
                                type="month"
                                value={exp.startDate} 
                                onChange={(e) => updateExperience(index, "startDate", e.target.value)} 
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>End Date</Label>
                              <Input 
                                type="month"
                                value={exp.endDate || ""} 
                                onChange={(e) => updateExperience(index, "endDate", e.target.value)}
                                disabled={exp.current} 
                              />
                              <div className="flex items-center gap-2 mt-1">
                                <input 
                                  type="checkbox" 
                                  id={`current-${index}`}
                                  checked={exp.current}
                                  onChange={(e) => updateExperience(index, "current", e.target.checked)}
                                  className="rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <label htmlFor={`current-${index}`} className="text-xs">I currently work here</label>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea 
                              value={exp.description} 
                              onChange={(e) => updateExperience(index, "description", e.target.value)}
                              placeholder="• Bullet points work best&#10;• Use action verbs&#10;• Quantify your impact"
                              className="h-32 font-mono text-sm"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {activeStep === "education" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">Education</h2>
                    <p className="text-muted-foreground">Degrees and certifications.</p>
                  </div>
                  {education.map((edu, i) => (
                     <Card key={i}>
                       <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label>School/University</Label>
                            <Input value={edu.school} onChange={(e) => {
                              const newEdu = [...education];
                              newEdu[i].school = e.target.value;
                              setEducation(newEdu);
                            }} />
                          </div>
                          <div className="space-y-2">
                            <Label>Degree</Label>
                            <Input value={edu.degree} onChange={(e) => {
                              const newEdu = [...education];
                              newEdu[i].degree = e.target.value;
                              setEducation(newEdu);
                            }} />
                          </div>
                          <div className="space-y-2">
                            <Label>Graduation Year</Label>
                            <Input value={edu.year} onChange={(e) => {
                              const newEdu = [...education];
                              newEdu[i].year = e.target.value;
                              setEducation(newEdu);
                            }} />
                          </div>
                       </CardContent>
                     </Card>
                  ))}
                  <Button variant="outline" size="sm" onClick={() => setEducation([...education, { school: "", degree: "", year: "" }])}>
                    <Plus className="h-4 w-4 mr-2" /> Add Education
                  </Button>
                </div>
              )}

              {activeStep === "match" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">Job Match</h2>
                    <p className="text-muted-foreground">Paste the Job Description to optimize your resume.</p>
                  </div>
                  
                  <Card className="bg-indigo-50/50 border-indigo-100">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                         <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                              <Target className="h-5 w-5 text-indigo-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-indigo-900">Optimization Score: 85/100</h3>
                              <p className="text-sm text-indigo-700 mt-1">Your resume is a strong match! Adding keywords like "Agile" and "TypeScript" could boost your score.</p>
                            </div>
                         </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-2">
                    <Label>Job Description</Label>
                    <Textarea 
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      placeholder="Paste the full job description here..."
                      className="h-64"
                    />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Right Panel: Live Preview */}
        <div className="hidden lg:flex w-1/2 bg-slate-200 p-8 items-center justify-center">
          <div className="h-full w-full max-w-[210mm] aspect-[210/297] bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col animate-in zoom-in-95 duration-500">
            {/* Resume Document */}
            <div className="flex-1 p-[40px] text-slate-900 font-serif text-sm leading-relaxed overflow-y-auto custom-scrollbar">
              
              {/* Header */}
              <div className="border-b-2 border-slate-900 pb-6 mb-6">
                <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">{personalInfo.fullName || "Your Name"}</h1>
                <div className="flex flex-wrap gap-3 text-xs text-slate-600 font-sans">
                  {personalInfo.email && <span>{personalInfo.email}</span>}
                  {personalInfo.phone && <span>• {personalInfo.phone}</span>}
                  {personalInfo.linkedin && <span>• {personalInfo.linkedin}</span>}
                </div>
              </div>

              {/* Summary */}
              {personalInfo.summary && (
                <div className="mb-6">
                  <h2 className="text-xs font-bold uppercase tracking-widest border-b border-slate-200 pb-1 mb-3 text-slate-500 font-sans">Professional Summary</h2>
                  <p>{personalInfo.summary}</p>
                </div>
              )}

              {/* Experience */}
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-widest border-b border-slate-200 pb-1 mb-3 text-slate-500 font-sans">Experience</h2>
                <div className="space-y-4">
                  {experiences.map((exp, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-base">{exp.title}</h3>
                        <span className="text-xs font-sans text-slate-500">{exp.startDate} - {exp.current ? "Present" : exp.endDate}</span>
                      </div>
                      <div className="text-sm italic mb-2 text-slate-700">{exp.company}</div>
                      <div className="whitespace-pre-line pl-4 border-l-2 border-slate-100 text-slate-800">
                        {exp.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest border-b border-slate-200 pb-1 mb-3 text-slate-500 font-sans">Education</h2>
                <div className="space-y-2">
                  {education.map((edu, i) => (
                     <div key={i} className="flex justify-between">
                       <div>
                         <div className="font-bold">{edu.school}</div>
                         <div>{edu.degree}</div>
                       </div>
                       <div className="text-xs font-sans text-slate-500">{edu.year}</div>
                     </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
