import cyberHero from "@/assets/cyber-hero.jpg";

export const TitleSlide = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative bg-gradient-dark py-8"
      dir="rtl"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.9)), url(${cyberHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center space-y-8 px-8 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-foreground glow-text">
            الحروب السيبرانية
          </h1>
          <h2 className="text-4xl font-semibold text-primary-glow">
            وتداعياتها على الأمن القومي
          </h2>
        </div>
        
        <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        
        <div className="bg-card/20 backdrop-blur-sm border border-border rounded-2xl p-8 glow-border">
          <h3 className="text-2xl font-semibold text-foreground mb-6">إعداد الطلاب:</h3>
          <div className="space-y-4 text-lg">
            <div className="flex justify-center items-center gap-4">
              <span className="text-primary font-medium">رافت وحيد رافت بدوي</span>
              <span className="text-accent">رقم: 618</span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <span className="text-primary font-medium">محمد عبد الراضي سيد أحمد بعث الله</span>
              <span className="text-accent">رقم: 593</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};