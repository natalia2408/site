document.addEventListener('DOMContentLoaded', function() {
  console.log(document.querySelectorAll('.how_we_work__steps__link'))
  document.querySelectorAll('.how_we_work__steps__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab__content').forEach(function(tabContent)
      {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      })
  })
})


