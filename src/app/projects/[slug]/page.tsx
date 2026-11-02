import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { portfolioData } from '../../../../data/portfolio';
import ProjectDetailClient from '../../../components/ProjectDetailClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map(project => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find(p => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Case Study & Gallery`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${portfolioData.personal.name}`,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projects = portfolioData.projects;
  const currentIndex = projects.findIndex(p => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <ProjectDetailClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}

