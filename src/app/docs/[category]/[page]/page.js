export default function DocsPage({ params }) {
  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">
        {params.category}/{params.page}
      </h1>
      <div className="prose prose-invert">
        <p>This is the documentation page for {params.category}/{params.page}</p>
      </div>
    </div>
  )
} 