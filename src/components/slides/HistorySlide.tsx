import cyberEvolution from "@/assets/cyber-evolution.jpg";

export const HistorySlide = () => {
  return (
    <div className="min-h-screen bg-gradient-dark p-8 py-16" dir="rtl">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 glow-text">
            تطور الحروب السيبرانية عبر التاريخ
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-background">80s</div>
                <h3 className="text-xl font-semibold text-accent">البدايات الأولى</h3>
              </div>
              <p className="text-foreground">ظهور أول الفيروسات البسيطة مثل "Morris Worm" في عام 1988</p>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-background">90s</div>
                <h3 className="text-xl font-semibold text-primary">عصر الإنترنت</h3>
              </div>
              <p className="text-foreground">نمو الهجمات مع انتشار الإنترنت وظهور أول جماعات الهاكرز المنظمة</p>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-glow rounded-full flex items-center justify-center font-bold text-background">00s</div>
                <h3 className="text-xl font-semibold text-primary-glow">الهجمات المتقدمة</h3>
              </div>
              <p className="text-foreground">ظهور APTs والهجمات المعقدة المدعومة من الدول</p>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center font-bold text-foreground">10s</div>
                <h3 className="text-xl font-semibold text-destructive">عصر الحروب السيبرانية</h3>
              </div>
              <p className="text-foreground">Stuxnet وبداية استخدام الحروب السيبرانية كسلاح استراتيجي</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={cyberEvolution} 
                alt="تطور الحروب السيبرانية" 
                className="rounded-2xl shadow-glow max-w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-secondary/30 p-6 rounded-2xl border border-border inline-block">
            <p className="text-xl text-primary-glow font-medium">
              "من فيروسات بسيطة إلى أسلحة رقمية متطورة في 40 عاماً"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};