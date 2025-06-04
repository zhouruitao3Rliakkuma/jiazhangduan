
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#165DFF',          // 主色调：深蓝
          secondary: '#4080FF',        // 辅助色：中蓝
          accent: '#7B61FF',           // 强调色：紫色
          success: '#00B42A',          // 成功色：绿色
          warning: '#FF7D00',          // 警告色：橙色
          danger: '#F53F3F',           // 危险色：红色
          neutral: {
            50: '#F7F8FA',             // 最浅背景
            100: '#F2F3F5',            // 浅灰背景
            200: '#E5E6EB',            // 边框
            300: '#C9CDD4',            // 次要文本
            400: '#86909C',            // 辅助文本
            500: '#4E5969',            // 正文文本
            600: '#272E3B',            // 标题文本
            700: '#1D2129',            // 深色文本
          }
        },
        fontFamily: {
          inter: ['Inter', 'system-ui', 'sans-serif'],
        },
        boxShadow: {
          'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
          'card-hover': '0 10px 30px rgba(22, 93, 255, 0.12)',
          'nav': '0 -2px 15px rgba(0, 0, 0, 0.05)',
        },
        animation: {
          'fade-in': 'fadeIn 0.3s ease-in-out',
          'slide-up': 'slideUp 0.4s ease-out',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          }
        }
      },
    }
  }

    document.addEventListener('DOMContentLoaded', function() {
      const navItems = document.querySelectorAll('.nav-item');
      const pages = document.querySelectorAll('.page-content');

      navItems.forEach(item => {
        item.addEventListener('click', function(e) {
          e.preventDefault();

          const targetPage = this.getAttribute('data-page');

          pages.forEach(page => {
            page.classList.add('hidden');
          });

          document.getElementById(targetPage).classList.remove('hidden');

          navItems.forEach(nav => {
            nav.classList.remove('active');
            nav.querySelector('i').classList.remove('text-primary');
            nav.querySelector('i').classList.add('text-neutral-500');
          });

          this.classList.add('active');
          this.querySelector('i').classList.remove('text-neutral-500');
          this.querySelector('i').classList.add('text-primary');

          if (targetPage === 'progress-page') {
            setTimeout(() => {
              const progressBars = document.querySelectorAll('.progress-animate');
              progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                  bar.style.width = width;
                }, 100);
              });
            }, 100);
          }
        });
      });

      document.querySelector('.nav-item.active i').classList.add('text-primary');
      document.querySelector('.nav-item.active i').classList.remove('text-neutral-500');

      // 退出登录按钮
      document.getElementById('logout-btn').addEventListener('click', function() {
        if (confirm('确定要退出当前账号吗？')) {
          // 这里添加实际的退出登录逻辑
          alert('已成功退出登录！');
        }
      });
    });
