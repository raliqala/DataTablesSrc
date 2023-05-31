/*! DataTables flowbites integration
 * 2020 SpryMedia Ltd - datatables.net/license
 */

/**
 * DataTables integration for flowbites. This requires flowbites and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using flowbite. See http://datatables.net/manual/styling/flowbite
 * for further information.
 */

/* Set the defaults for DataTables initialisation */
$.extend( true, DataTable.defaults, {
	dom:
		"<'row'<'grid-cols-12 grid-cols-6'l><'grid-cols-12 grid-cols-6'f>>" +
		"<'row dt-row'<'grid-cols-12'tr>>" +
		"<'row'<'grid-cols-12 grid-cols-5'i><'grid-cols-12 grid-cols-7'p>>",
	renderer: 'flowbite'
} );


/* Default class modification */
$.extend( DataTable.ext.classes, {
	sWrapper:      "dataTables_wrapper dt-flowbite",
	sFilterInput:  "input",
	sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
	sProcessing:   "dataTables_processing card"
} );


/* flowbite paging button renderer */
DataTable.ext.renderer.pageButton.flowbite = function ( settings, host, idx, buttons, page, pages ) {
	var api     = new DataTable.Api( settings );
	var classes = settings.oClasses;
	var lang    = settings.oLanguage.oPaginate;
	var aria = settings.oLanguage.oAria.paginate || {};
	var btnDisplay, btnClass;

	var attach = function( container, buttons ) {
		var i, ien, node, button;
		var clickHandler = function ( e ) {
			e.preventDefault();
			if ( !$(e.currentTarget).hasClass('disabled') && api.page() != e.data.action ) {
				api.page( e.data.action ).draw( 'page' );
			}
		};

		for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
			button = buttons[i];

			if ( Array.isArray( button ) ) {
				attach( container, button );
			}
			else {
				btnDisplay = '';
				btnClass = '';
				tag = null;

				switch ( button ) {
					case 'ellipsis':
						btnDisplay = '&#x2026;';
						btnClass = 'unavailable disabled';
						tag = null;
						break;

					case 'first':
						btnDisplay = lang.sFirst;
						btnClass = button + (page > 0 ?
							'' : ' unavailable disabled');
						tag = page > 0 ? 'a' : null;
						break;

					case 'previous':
						btnDisplay = lang.sPrevious;
						btnClass = button + (page > 0 ?
							'' : ' unavailable disabled');
						tag = page > 0 ? 'a' : null;
						break;

					case 'next':
						btnDisplay = lang.sNext;
						btnClass = button + (page < pages-1 ?
							'' : ' unavailable disabled');
						tag = page < pages-1 ? 'a' : null;
						break;

					case 'last':
						btnDisplay = lang.sLast;
						btnClass = button + (page < pages-1 ?
							'' : ' unavailable disabled');
						tag = page < pages-1 ? 'a' : null;
						break;

					default:
						btnDisplay = button + 1;
						btnClass = page === button ?
							'current' : '';
						tag = page === button ?
							null : 'a';
						break;
				}

				if ( v5 ) {
					tag = 'a';
				}

				if ( btnDisplay ) {
					var disabled = btnClass.indexOf('disabled') !== -1;

					node = $('<li>', {
							'class': classes.sPageButton+' '+btnClass,
							'id': idx === 0 && typeof button === 'string' ?
								settings.sTableId +'_'+ button :
								null
						} )
						.append( tag ?
							$('<'+tag+'/>', {
								'href': disabled ? null : '#',
								'aria-controls': settings.sTableId,
								'aria-disabled': disabled ? 'true' : null,
								'aria-label': aria[ button ],
								'role': 'link',
								'aria-current': btnClass === 'current' ? 'page' : null,
								'tabindex': settings.iTabIndex,
							} ).html( btnDisplay ) :
							btnDisplay
						)
						.appendTo( container );

					settings.oApi._fnBindAction(
						node, {action: button}, clickHandler
					);
				}
			}
		}
	};

	var hostEl = $(host);
	// IE9 throws an 'unknown error' if document.activeElement is used
	// inside an iframe or frame. 
	var activeEl;

	try {
		// Because this approach is destroying and recreating the paging
		// elements, focus is lost on the select button which is bad for
		// accessibility. So we want to restore focus once the draw has
		// completed
		activeEl = hostEl.find(document.activeElement).data('dt-idx');
	}
	catch (e) {}

	var paginationEl = hostEl.children('ul.pagination');

	if (paginationEl.length) {
		paginationEl.empty();
	}
	else {
		paginationEl = hostEl.html('<ul/>').children('ul').addClass('pagination');
	}

	attach(
		paginationEl,
		buttons
	);

	if ( activeEl !== undefined ) {
		hostEl.find('[data-dt-idx='+activeEl+']').trigger('focus');
	}
};
