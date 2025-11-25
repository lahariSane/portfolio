import { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import DetailPageContainer from "@/components/detail/DetailPageContainer";
import {
  DetailLayout,
  DetailSection,
  DetailBulletList,
  DetailGallery,
} from "@/components/detail/DetailLayout";
import { getProjectBySlug, getOtherProjects, projects as projectsData } from "@/data/projects";
import SEO from "@/components/seo";
import { SITE_NAME, SITE_URL } from "@/config/siteMeta";

const ProjectDetail = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const project = useMemo(() => getProjectBySlug(slug), [slug]);

  const otherProjects = useMemo(
    () => (project ? getOtherProjects(project.slug) : projectsData),
    [project],
  );

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const projectUrl = `${SITE_URL}/projects/${project.slug}`;

  return (
    <DetailPageContainer
      relatedTitle="Explore Other Projects"
      relatedLink={{ to: "/#projects", label: "View all" }}
      relatedContent={
        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((other) => (
            <Link key={other.slug} to={`/projects/${other.slug}`} className="group h-full">
              <Card className="h-full border-border/70 bg-card/80 transition hover:shadow-glow">
                <div className="h-40 overflow-hidden rounded-t-lg">
                  <img
                    src={other.coverImage}
                    alt={`${other.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="space-y-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{other.summary}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {other.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      }
    >
      <SEO
        title={`${project.title} — ${SITE_NAME}`}
        description={project.summary}
        keywords={[project.title, ...project.tech, "Lahari Sane projects", "Portfolio"]}
        url={projectUrl}
      />
      <DetailLayout
        coverImage={project.coverImage}
        coverAlt={`${project.title} preview`}
        badge={
          <Badge variant="secondary" className="uppercase tracking-wide">
            Featured Project
          </Badge>
        }
        title={project.title}
        summary={project.summary}
        supportingText={
          project.achievement ? (
            <p className="text-sm text-accent font-semibold">🏆 {project.achievement}</p>
          ) : undefined
        }
        metadata={project.metadata}
        actions={
          <div className="flex flex-wrap gap-4">
            {project.live && (
              <Button
                asChild
                className="bg-gradient-primary text-white shadow-glow hover:opacity-90 transition"
              >
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.github && (
              <Button variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              </Button>
            )}
          </div>
        }
      >
        <DetailSection title="Project Overview">
          <p className="text-base leading-relaxed text-muted-foreground">{project.description}</p>
        </DetailSection>

        <DetailSection title="Stack & Tools">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </DetailSection>

        <DetailGallery title="Gallery Showcase" images={project.gallery} altPrefix={project.title} />

        <div className="grid gap-6 md:grid-cols-2">
          {project.details.map((section) => (
            <Card key={section.title} className="border-border/80 bg-background/70 backdrop-blur">
              <CardContent className="px-6 py-6 space-y-3">
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <DetailBulletList
                  items={section.items}
                  className="space-y-2 text-sm text-muted-foreground leading-relaxed"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <DetailSection title="Highlights">
          <DetailBulletList items={project.highlights} bulletClassName="bg-accent" />
        </DetailSection>
      </DetailLayout>
    </DetailPageContainer>
  );
};

export default ProjectDetail;
