export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      북 페이지 : <q>{id}</q>
    </div>
  );
}
