export const IntroSlide = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark p-8" dir="rtl">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 glow-text">
            ما هي الحروب السيبرانية؟
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card">
            <h2 className="text-2xl font-semibold text-primary mb-6">التعريف</h2>
            <p className="text-lg text-foreground leading-relaxed">
              الحروب السيبرانية هي استخدام التكنولوجيا الرقمية لشن هجمات على البنية التحتية للمعلومات 
              والشبكات الحيوية للدول والمؤسسات بهدف إلحاق الضرر أو السيطرة أو التجسس.
            </p>
          </div>

          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card">
            <h2 className="text-2xl font-semibold text-accent mb-6">الخصائص الرئيسية</h2>
            <ul className="space-y-3 text-lg text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                عدم الحاجة لحدود جغرافية
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                صعوبة تحديد مصدر الهجوم
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                تكلفة منخفضة وتأثير كبير
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                سرعة الانتشار والتنفيذ
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-secondary/30 p-6 rounded-2xl border border-border inline-block">
            <p className="text-xl text-primary-glow font-medium">
              "المعركة الحديثة تدور في الفضاء السيبراني قبل أن تصل إلى أرض الواقع"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};