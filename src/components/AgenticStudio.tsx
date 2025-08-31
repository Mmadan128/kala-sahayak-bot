import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bot, 
  Image, 
  FileText, 
  DollarSign, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Users
} from "lucide-react";

const AgenticStudio = () => {
  const aiTools = [
    {
      icon: Image,
      title: "Image Enhancement",
      description: "AI-powered image optimization and background removal",
      status: "active",
      usage: 85
    },
    {
      icon: FileText,
      title: "Story Generation",
      description: "Create compelling product narratives and descriptions",
      status: "active", 
      usage: 72
    },
    {
      icon: DollarSign,
      title: "Smart Pricing",
      description: "Market analysis and pricing recommendations",
      status: "active",
      usage: 68
    },
    {
      icon: Globe,
      title: "Global Publishing",
      description: "Multi-platform product listing and management",
      status: "ready",
      usage: 45
    }
  ];

  const recentActivities = [
    {
      id: 1,
      artisan: "Priya Devi",
      action: "Enhanced pottery collection",
      time: "2 minutes ago",
      status: "completed"
    },
    {
      id: 2,
      artisan: "Ramesh Kumar", 
      action: "Generated story for handwoven rug",
      time: "5 minutes ago",
      status: "completed"
    },
    {
      id: 3,
      artisan: "Anita Sharma",
      action: "Price optimization in progress",
      time: "8 minutes ago", 
      status: "processing"
    },
    {
      id: 4,
      artisan: "Vikram Singh",
      action: "Published to global marketplace",
      time: "12 minutes ago",
      status: "completed"
    }
  ];

  return (
    <section id="studio" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-gradient-primary border-0 text-primary-foreground mb-4">
            <Bot className="w-4 h-4 mr-2" />
            Agentic AI Studio
          </Badge>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            AI-Powered Publishing for{" "}
            <span className="text-gradient-primary">Artisans</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our intelligent agents help artisans transform their creations into compelling online stories, 
            optimized for global markets with just a photo and a note.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI Tools Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  AI Agent Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  {aiTools.map((tool, index) => {
                    const IconComponent = tool.icon;
                    return (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-foreground" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{tool.title}</h4>
                            <p className="text-sm text-muted-foreground">{tool.description}</p>
                          </div>
                          <Badge 
                            variant={tool.status === "active" ? "default" : "secondary"}
                            className={tool.status === "active" ? "bg-green-600" : ""}
                          >
                            {tool.status}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Usage</span>
                            <span className="text-foreground">{tool.usage}%</span>
                          </div>
                          <Progress value={tool.usage} className="h-2" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Workflow Demo */}
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      { step: 1, title: "Send Photo", desc: "WhatsApp your product image", icon: Image },
                      { step: 2, title: "Add Note", desc: "Share your creation story", icon: FileText },
                      { step: 3, title: "AI Enhancement", desc: "Our agents work their magic", icon: Bot },
                      { step: 4, title: "Global Launch", desc: "Your product goes live", icon: Globe }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="text-center space-y-3">
                          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                            <IconComponent className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{item.title}</div>
                            <div className="text-sm text-muted-foreground">{item.desc}</div>
                          </div>
                          {index < 3 && (
                            <ArrowRight className="w-4 h-4 text-muted-foreground mx-auto hidden md:block" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Activity Feed */}
          <div className="space-y-6">
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  Live Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map(activity => (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === "completed" ? "bg-green-500" : "bg-yellow-500"
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground text-sm">
                          {activity.artisan}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {activity.action}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {activity.time}
                          </span>
                          {activity.status === "completed" && (
                            <CheckCircle className="w-3 h-3 text-green-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="glass-card border-primary/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">AI Agents Active</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-foreground">1,247</div>
                      <div className="text-xs text-muted-foreground">Products Enhanced</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">98.5%</div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                  <Button variant="premium" className="w-full" asChild>
                    <a href="/ai-studio">
                      Try AI Studio
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticStudio;