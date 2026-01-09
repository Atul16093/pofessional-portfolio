export default function CaseStudyPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <main>
      <h1>Case Study: {params.slug}</h1>
    </main>
  )
}

