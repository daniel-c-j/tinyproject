export default function QuickMenu({ children }) {
  return (
    <div className="fixed bottom-0 right-0 p-2 pb-1 bg-green-900 rounded-tl-md ">
      {children}
    </div>
  );
}
