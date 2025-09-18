const OrangeButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="group relative bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 border-2 border-orange-300/50 max-w-56 min-w-56 justify-center rounded-full text-base px-6 py-3 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-orange-300/30 to-orange-400/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
      
      {/* Content with icon animation */}
      <div className="relative z-10 text-white font-semibold tracking-wide group-hover:text-white/95 transition-all duration-300 group-hover:translate-x-1">
        {children}
      </div>
    </button>
  );
};

export default OrangeButton;