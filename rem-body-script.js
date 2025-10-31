// Card hover animations
document.querySelectorAll('.project-card, .governance-card, .research-card, .involvement-card, .understanding-card, .architecture-card, .principle-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    section.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .loaded section {
        transition-delay: 0.2s;
    }
    
    /* Additional animation for cards */
    .understanding-card, .architecture-card, .principle-card, .project-card, .governance-card, .research-card, .involvement-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .understanding-card.fade-in, .architecture-card.fade-in, .principle-card.fade-in, .project-card.fade-in, .governance-card.fade-in, .research-card.fade-in, .involvement-card.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Observe all cards for animation
document.querySelectorAll('.understanding-card, .architecture-card, .principle-card, .project-card, .governance-card, .research-card, .involvement-card').forEach(card => {
    observer.observe(card);
});

// Manifesto quote highlight effect
const manifestoQuote = document.querySelector('.manifesto-quote');
if (manifestoQuote) {
    manifestoQuote.addEventListener('mouseenter', function() {
        this.style.borderLeftColor = 'var(--cyan-neon)';
        this.style.transform = 'scale(1.02)';
    });
    
    manifestoQuote.addEventListener('mouseleave', function() {
        this.style.borderLeftColor = 'var(--green-energy)';
        this.style.transform = 'scale(1)';
    });
}

