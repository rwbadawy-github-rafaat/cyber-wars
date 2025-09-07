import cyberThreats from "@/assets/cyber-threats.jpg";

export const TypesSlide = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark p-8" dir="rtl">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 glow-text">
            أنواع الهجمات السيبرانية
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-3">🦠 البرمجيات الخبيثة (Malware)</h3>
              <p className="text-foreground">فيروسات وبرامج ضارة تهدف لإتلاف الأنظمة أو سرقة البيانات</p>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold text-accent mb-3">🎣 التصيد الإلكتروني (Phishing)</h3>
              <p className="text-foreground">خداع المستخدمين للحصول على معلومات حساسة مثل كلمات المرور</p>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-3">⚡ هجمات إنكار الخدمة (DDoS)</h3>
              <p className="text-foreground">إغراق الخوادم بطلبات وهمية لتعطيل الخدمات</p>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold text-destructive mb-3">🔒 برامج الفدية (Ransomware)</h3>
              <p className="text-foreground">تشفير البيانات ومطالبة الضحية بفدية لاستعادتها</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={cyberThreats} 
                alt="أنواع التهديدات السيبرانية" 
                className="rounded-2xl shadow-glow max-w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};