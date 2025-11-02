interface PlaceholderPageProps {
  title: string;
  icon: string;
}

export const PlaceholderPage = ({ title, icon }: PlaceholderPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <div className="text-6xl mb-4">{icon}</div>
      <h1 className="text-3xl font-bold text-cyan mb-2">{title}</h1>
      <p className="text-slate-400">Coming soon...</p>
    </div>
  );
};

