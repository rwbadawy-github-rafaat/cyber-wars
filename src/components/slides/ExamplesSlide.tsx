export const ExamplesSlide = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark p-8" dir="rtl">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 glow-text">
            أمثلة واقعية للحروب السيبرانية
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-semibold text-destructive">فيروس Stuxnet (2010)</h3>
            </div>
            <p className="text-foreground mb-4 leading-relaxed">
              استهدف المنشآت النووية الإيرانية ونجح في تدمير أجهزة الطرد المركزي، 
              مما أدى إلى تأخير البرنامج النووي الإيراني لسنوات.
            </p>
            <div className="bg-secondary/20 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>التأثير:</strong> تدمير 1000 جهاز طرد مركزي وتأخير البرنامج النووي
              </p>
            </div>
          </div>

          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-semibold text-accent">هجمات Estonia (2007)</h3>
            </div>
            <p className="text-foreground mb-4 leading-relaxed">
              هجمات إلكترونية واسعة النطاق استهدفت الحكومة والبنوك وشركات الاتصالات في إستونيا، 
              مما أدى إلى شلل شبه كامل للخدمات الرقمية.
            </p>
            <div className="bg-secondary/20 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>التأثير:</strong> توقف الخدمات المصرفية والحكومية لأسابيع
              </p>
            </div>
          </div>

          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-semibold text-primary">هجوم WannaCry (2017)</h3>
            </div>
            <p className="text-foreground mb-4 leading-relaxed">
              برنامج فدية انتشر عالمياً وأثر على مئات الآلاف من أجهزة الكمبيوتر في أكثر من 150 دولة، 
              وتسبب في تعطيل المستشفيات والمؤسسات الحيوية.
            </p>
            <div className="bg-secondary/20 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>التأثير:</strong> إصابة 300,000 جهاز في 150 دولة
              </p>
            </div>
          </div>

          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-primary-glow rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-semibold text-primary-glow">هجوم SolarWinds (2020)</h3>
            </div>
            <p className="text-foreground mb-4 leading-relaxed">
              هجوم معقد استهدف شركة SolarWinds وأثر على آلاف المؤسسات الحكومية والخاصة، 
              بما في ذلك وزارات أمريكية مهمة.
            </p>
            <div className="bg-secondary/20 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>التأثير:</strong> اختراق 18,000 منظمة حكومية وخاصة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};