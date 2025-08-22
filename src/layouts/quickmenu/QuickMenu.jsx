export default function QuickMenu({ children, className }) {
  return (
    <div className={className} data-testid="quickmenu">
      {children}
    </div>
  );
}
