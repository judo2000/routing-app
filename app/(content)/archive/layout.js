export default function ArchiveLayoug({ archive, latest }) {
  return (
    <div>
      <section id="archive-filter">{archive}</section>
      <section id="archiveLatest">{latest}</section>
    </div>
  );
}
