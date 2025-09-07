export const ConclusionSlide = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark p-8" dir="rtl">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 glow-text">
            الخلاصة والتوصيات
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card">
            <h2 className="text-3xl font-semibold text-primary mb-6 text-center">النقاط الرئيسية</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <p className="text-foreground">الحروب السيبرانية تهديد حقيقي وخطير للأمن القومي</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <p className="text-foreground">التأثير يمتد للقطاعات الحيوية والاقتصاد والمجتمع</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <p className="text-foreground">الحماية تتطلب استراتيجية شاملة ومتعددة المستويات</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <p className="text-foreground">التعاون الدولي والتوعية أساسيان للمواجهة</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card">
            <h2 className="text-3xl font-semibold text-accent mb-6 text-center">التوصيات</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-secondary/20 rounded-xl">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-semibold text-primary mb-2">للحكومات</h3>
                <p className="text-sm text-foreground">وضع استراتيجيات أمن سيبراني وطنية شاملة</p>
              </div>
              <div className="text-center p-4 bg-secondary/20 rounded-xl">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="font-semibold text-accent mb-2">للمؤسسات</h3>
                <p className="text-sm text-foreground">الاستثمار في الأمن السيبراني وتدريب الموظفين</p>
              </div>
              <div className="text-center p-4 bg-secondary/20 rounded-xl">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="font-semibold text-primary-glow mb-2">للأفراد</h3>
                <p className="text-sm text-foreground">زيادة الوعي واتباع ممارسات الأمان الرقمي</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-secondary/30 p-8 rounded-2xl border border-border inline-block">
              <p className="text-2xl text-primary-glow font-medium mb-4">
                "الأمن السيبراني مسؤولية جماعية تتطلب تضافر جهود الجميع"
              </p>
              <p className="text-lg text-muted-foreground">
                شكراً لحسن الاستماع
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};