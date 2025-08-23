export default function QuickMenu({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <div className={className} data-testid="quickmenu">
      {children}
    </div>
  );
}
