document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter__btn');
  
    function closeOtherFilterLists(currentBtn) {
      filterBtns.forEach(btn => {
        if (btn !== currentBtn) {
          const filterList = btn.nextElementSibling;
          if (filterList) {
            filterList.classList.remove('filter__list--opened');
          }
        }
      });
    }
  
    function toggleFilterList(btn) {
      const filterList = btn.nextElementSibling;
      if (filterList) {
        filterList.classList.toggle('filter__list--opened');
      }
    }
  
    function closeAllFilterLists() {
      filterBtns.forEach(btn => {
        const filterList = btn.nextElementSibling;
        if (filterList) {
          filterList.classList.remove('filter__list--opened');
        }
      });
    }
  
    function isInsideFilter(btn, e) {
      const filterList = btn.nextElementSibling;
      return (btn.contains(e.target) || (filterList && filterList.contains(e.target)));
    }

    closeAllFilterLists();
  
    // e for filter buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        toggleFilterList(this);
        closeOtherFilterLists(this);
        e.stopPropagation();
      });
    });
  
    // e for document click
    document.addEventListener('click', function(e) {
      let isInsideAnyFilter = false;
  
      filterBtns.forEach(btn => {
        if (isInsideFilter(btn, e)) {
          isInsideAnyFilter = true;
        }
      });
  
      if (!isInsideAnyFilter) {
        closeAllFilterLists();
      }
    });
  
    // e to prevent closing filter lists when clicking inside them
    document.querySelectorAll('.filter__list').forEach(filterList => {
      filterList.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('List clicked');
      });
    });
  });