document.addEventListener('DOMContentLoaded', () => {
  const profile = document.querySelector('.profile-window');
  profile.addEventListener('mouseenter', () => profile.style.transform = 'translateY(-6px) scale(1.01)');
  profile.addEventListener('mouseleave', () => profile.style.transform = '');
});
