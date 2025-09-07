import nationalSecurity from "@/assets/national-security.jpg";

export const ImpactSlide = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark p-8" dir="rtl">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 glow-text">
            التأثير على الأمن القومي
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={nationalSecurity} 
                alt="الأمن القومي" 
                className="rounded-2xl shadow-glow max-w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
              <h3 className="text-xl font-semibold text-destructive mb-4">🏛️ الأضرار الحكومية</h3>
              <ul className="space-y-2 text-foreground">
                <li>• تعطيل الخدمات الحكومية الأساسية</li>
                <li>• سرقة المعلومات الحساسة والسرية</li>
                <li>• تخريب البنية التحتية الرقمية</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
              <h3 className="text-xl font-semibold text-accent mb-4">💼 التأثير الاقتصادي</h3>
              <ul className="space-y-2 text-foreground">
                <li>• خسائر مالية تقدر بمليارات الدولارات</li>
                <li>• توقف العمليات التجارية والمصرفية</li>
                <li>• فقدان الثقة في الأنظمة الرقمية</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
              <h3 className="text-xl font-semibold text-primary mb-4">👥 التأثير المجتمعي</h3>
              <ul className="space-y-2 text-foreground">
                <li>• تعطيل الخدمات الطبية والتعليمية</li>
                <li>• انقطاع شبكات الكهرباء والمواصلات</li>
                <li>• انتشار الذعر وفقدان الأمان</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};