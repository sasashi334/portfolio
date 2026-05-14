document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio site loaded!');

    // Smooth scroll for the "Scroll Down" button
    const scrollDownBtn = document.querySelector('.scroll-down');
    if (scrollDownBtn) {
        scrollDownBtn.style.cursor = 'pointer';
        scrollDownBtn.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Video Modal Logic
    const modal = document.getElementById('video-modal');
    const videoBtns = document.querySelectorAll('.open-video-modal');
    const span = document.querySelector('.close-modal');
    const iframe = document.getElementById('drive-video');

    if (videoBtns.length > 0 && modal && span) {
        videoBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const videoUrl = btn.getAttribute('data-video-url');
                if (videoUrl) {
                    iframe.src = videoUrl;
                }
                modal.style.display = 'block';
            });
        });

        // Close modal when clicking the 'x'
        span.addEventListener('click', () => {
            modal.style.display = 'none';
            // Stop video
            iframe.src = '';
        });

        // Close modal when clicking outside the video
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                iframe.src = '';
            }
        });
    }
});
