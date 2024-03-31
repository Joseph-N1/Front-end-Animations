function changeTab(tabNumber) {
    const tabs = document.querySelectorAll('.tab');
    const indicator = document.querySelector('.indicator');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    const activeTab = tabs[tabNumber - 1];
    activeTab.classList.add('active');
    
    indicator.style.width = `${activeTab.offsetWidth}px`;
    indicator.style.left = `${activeTab.offsetLeft}px`;
}

document.addEventListener('DOMContentLoaded', () => changeTab(1));
