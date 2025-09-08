import cyberChallenges from "@/assets/cyber-challenges.jpg";

export const ChallengesSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-dark p-8 py-16" dir="rtl">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 glow-text">
            التحديات في مواجهة التهديدات السيبرانية
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card">
              <h3 className="text-2xl font-semibold text-destructive mb-6 text-center">🎯 تحديات التحديد والإسناد</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-destructive text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-foreground">صعوبة تحديد المصدر</h4>
                    <p className="text-sm text-muted-foreground">استخدام التقنيات المتقدمة لإخفاء الهوية</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-destructive text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-foreground">الإسناد القانوني</h4>
                    <p className="text-sm text-muted-foreground">صعوبة إثبات مسؤولية الجهات المهاجمة</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-destructive text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-foreground">الهجمات المعقدة</h4>
                    <p className="text-sm text-muted-foreground">استخدام عدة طبقات من التمويه والخداع</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card">
              <h3 className="text-2xl font-semibold text-accent mb-6 text-center">⚡ التحديات التقنية</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-accent text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-foreground">سرعة التطور</h4>
                    <p className="text-sm text-muted-foreground">ظهور تهديدات جديدة بشكل مستمر</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-foreground">نقص الخبرات</h4>
                    <p className="text-sm text-muted-foreground">قلة المتخصصين في الأمن السيبراني</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-foreground">التكاليف العالية</h4>
                    <p className="text-sm text-muted-foreground">استثمارات ضخمة في الحماية والتطوير</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={cyberChallenges} 
                  alt="تحديات الأمن السيبراني" 
                  className="rounded-2xl shadow-glow max-w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card">
              <h3 className="text-2xl font-semibold text-primary mb-6 text-center">🌍 التحديات القانونية والدولية</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-foreground">عدم وجود قوانين موحدة</h4>
                    <p className="text-sm text-muted-foreground">اختلاف التشريعات بين الدول</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-foreground">صعوبة التعاون الدولي</h4>
                    <p className="text-sm text-muted-foreground">تضارب المصالح السياسية</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-foreground">الحدود الرقمية</h4>
                    <p className="text-sm text-muted-foreground">تجاوز الهجمات للحدود الجغرافية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};