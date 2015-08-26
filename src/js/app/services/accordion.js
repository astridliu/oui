/**
 * Service for simple accordion directive
 *
 * @author Cheston Lee
 */
export default class AccordionService {
  constructor() {
    this.ACTIVE_ACCORDION_CLASS = 'accordion__item--active';
  }

  activate($el, target) {
    let $target = $(target);

    let contentPane = $target.parent('.accordion__item');
    let currentActive = $el.find(`.${this.ACTIVE_ACCORDION_CLASS}`);
    let contentHeight = currentActive.outerHeight();

    contentPane.animate({
      height: contentHeight
    }, {
      duration: 200,
      queue: false
    });

    currentActive.animate({
      height: $target.outerHeight()
    }, {
      duration: 200,
      queue: false,
      complete: () => {
        contentPane.parent().children().css('height', '');
      }
    });

    if (currentActive.length > 0) {
      currentActive.removeClass(this.ACTIVE_ACCORDION_CLASS);
    }

    $target.parent().addClass(this.ACTIVE_ACCORDION_CLASS);
  }
}