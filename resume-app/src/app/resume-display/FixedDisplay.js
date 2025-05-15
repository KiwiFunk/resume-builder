export default function FixedDisplay({ children }) {
    return (
    <div className="relative w-[210mm] h-[297mm] overflow-hidden border shadow-lg mx-auto scale-container">
      <div className="absolute top-0 left-0 w-full h-full origin-top-left scale-content">
        {children}
      </div>
    </div>
  );
}