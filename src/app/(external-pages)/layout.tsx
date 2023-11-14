export const dynamic = 'force-static';
export const revalidate = 60;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="w-2/3 mt-12 mx-auto">{children}</div>;
}
