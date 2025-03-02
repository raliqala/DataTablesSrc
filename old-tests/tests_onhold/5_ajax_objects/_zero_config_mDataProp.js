// DATA_TEMPLATE: empty_table
oTest.fnStart( "Sanity checks for DataTables with data from JS - Object data source" );

oTest.fnTest( 
	"jQuery.dataTable function",
	null,
	function () { return typeof jQuery().dataTable == "function"; }
);

oTest.fnTest(
	"jQuery.dataTableSettings storage array",
	null,
	function () { return typeof jQuery().dataTableSettings == "object"; }
);

oTest.fnTest(
	"jQuery.dataTableExt plugin object",
	null,
	function () { return typeof jQuery().dataTableExt == "object"; }
);

$(document).ready( function () {
	var oInit = {
		"aoColumns": [
			{ "mDataProp": "engine" },
			{ "mDataProp": "browser" },
			{ "mDataProp": "platform" },
			{ "mDataProp": "version" },
			{ "mDataProp": "grade" }
		],
		"aaData": [
	{
		"engine": "Trident",
		"browser": "Internet Explorer 4.0",
		"platform": "Win 95+",
		"version": "4",
		"grade": "X"
	},
	{
		"engine": "Trident",
		"browser": "Internet Explorer 5.0",
		"platform": "Win 95+",
		"version": "5",
		"grade": "C"
	},
	{
		"engine": "Trident",
		"browser": "Internet Explorer 5.5",
		"platform": "Win 95+",
		"version": "5.5",
		"grade": "A"
	},
	{
		"engine": "Trident",
		"browser": "Internet Explorer 6",
		"platform": "Win 98+",
		"version": "6",
		"grade": "A"
	},
	{
		"engine": "Trident",
		"browser": "Internet Explorer 7",
		"platform": "Win XP SP2+",
		"version": "7",
		"grade": "A"
	},
	{
		"engine": "Trident",
		"browser": "AOL browser (AOL desktop)",
		"platform": "Win XP",
		"version": "6",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Firefox 1.0",
		"platform": "Win 98+ / OSX.2+",
		"version": "1.7",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Firefox 1.5",
		"platform": "Win 98+ / OSX.2+",
		"version": "1.8",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Firefox 2.0",
		"platform": "Win 98+ / OSX.2+",
		"version": "1.8",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Firefox 3.0",
		"platform": "Win 2k+ / OSX.3+",
		"version": "1.9",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Camino 1.0",
		"platform": "OSX.2+",
		"version": "1.8",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Camino 1.5",
		"platform": "OSX.3+",
		"version": "1.8",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Netscape 7.2",
		"platform": "Win 95+ / Mac OS 8.6-9.2",
		"version": "1.7",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Netscape Browser 8",
		"platform": "Win 98SE+",
		"version": "1.7",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Netscape Navigator 9",
		"platform": "Win 98+ / OSX.2+",
		"version": "1.8",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Mozilla 1.0",
		"platform": "Win 95+ / OSX.1+",
		"version": "1",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Mozilla 1.1",
		"platform": "Win 95+ / OSX.1+",
		"version": "1.1",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Mozilla 1.2",
		"platform": "Win 95+ / OSX.1+",
		"version": "1.2",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Mozilla 1.3",
		"platform": "Win 95+ / OSX.1+",
		"version": "1.3",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Mozilla 1.4",
		"platform": "Win 95+ / OSX.1+",
		"version": "1.4",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Mozilla 1.5",
		"platform": "Win 95+ / OSX.1+",
		"version": "1.5",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Mozilla 1.6",
		"platform": "Win 95+ / OSX.1+",
		"version": "1.6",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Mozilla 1.7",
		"platform": "Win 98+ / OSX.1+",
		"version": "1.7",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Mozilla 1.8",
		"platform": "Win 98+ / OSX.1+",
		"version": "1.8",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Seamonkey 1.1",
		"platform": "Win 98+ / OSX.2+",
		"version": "1.8",
		"grade": "A"
	},
	{
		"engine": "Gecko",
		"browser": "Epiphany 2.20",
		"platform": "Gnome",
		"version": "1.8",
		"grade": "A"
	},
	{
		"engine": "Webkit",
		"browser": "Safari 1.2",
		"platform": "OSX.3",
		"version": "125.5",
		"grade": "A"
	},
	{
		"engine": "Webkit",
		"browser": "Safari 1.3",
		"platform": "OSX.3",
		"version": "312.8",
		"grade": "A"
	},
	{
		"engine": "Webkit",
		"browser": "Safari 2.0",
		"platform": "OSX.4+",
		"version": "419.3",
		"grade": "A"
	},
	{
		"engine": "Webkit",
		"browser": "Safari 3.0",
		"platform": "OSX.4+",
		"version": "522.1",
		"grade": "A"
	},
	{
		"engine": "Webkit",
		"browser": "OmniWeb 5.5",
		"platform": "OSX.4+",
		"version": "420",
		"grade": "A"
	},
	{
		"engine": "Webkit",
		"browser": "iPod Touch / iPhone",
		"platform": "iPod",
		"version": "420.1",
		"grade": "A"
	},
	{
		"engine": "Webkit",
		"browser": "S60",
		"platform": "S60",
		"version": "413",
		"grade": "A"
	},
	{
		"engine": "Presto",
		"browser": "Opera 7.0",
		"platform": "Win 95+ / OSX.1+",
		"version": "-",
		"grade": "A"
	},
	{
		"engine": "Presto",
		"browser": "Opera 7.5",
		"platform": "Win 95+ / OSX.2+",
		"version": "-",
		"grade": "A"
	},
	{
		"engine": "Presto",
		"browser": "Opera 8.0",
		"platform": "Win 95+ / OSX.2+",
		"version": "-",
		"grade": "A"
	},
	{
		"engine": "Presto",
		"browser": "Opera 8.5",
		"platform": "Win 95+ / OSX.2+",
		"version": "-",
		"grade": "A"
	},
	{
		"engine": "Presto",
		"browser": "Opera 9.0",
		"platform": "Win 95+ / OSX.3+",
		"version": "-",
		"grade": "A"
	},
	{
		"engine": "Presto",
		"browser": "Opera 9.2",
		"platform": "Win 88+ / OSX.3+",
		"version": "-",
		"grade": "A"
	},
	{
		"engine": "Presto",
		"browser": "Opera 9.5",
		"platform": "Win 88+ / OSX.3+",
		"version": "-",
		"grade": "A"
	},
	{
		"engine": "Presto",
		"browser": "Opera for Wii",
		"platform": "Wii",
		"version": "-",
		"grade": "A"
	},
	{
		"engine": "Presto",
		"browser": "Nokia N800",
		"platform": "N800",
		"version": "-",
		"grade": "A"
	},
	{
		"engine": "Presto",
		"browser": "Nintendo DS browser",
		"platform": "Nintendo DS",
		"version": "8.5",
		"grade": "C/A<sup>1</sup>"
	},
	{
		"engine": "KHTML",
		"browser": "Konqureror 3.1",
		"platform": "KDE 3.1",
		"version": "3.1",
		"grade": "C"
	},
	{
		"engine": "KHTML",
		"browser": "Konqureror 3.3",
		"platform": "KDE 3.3",
		"version": "3.3",
		"grade": "A"
	},
	{
		"engine": "KHTML",
		"browser": "Konqureror 3.5",
		"platform": "KDE 3.5",
		"version": "3.5",
		"grade": "A"
	},
	{
		"engine": "Tasman",
		"browser": "Internet Explorer 4.5",
		"platform": "Mac OS 8-9",
		"version": "-",
		"grade": "X"
	},
	{
		"engine": "Tasman",
		"browser": "Internet Explorer 5.1",
		"platform": "Mac OS 7.6-9",
		"version": "1",
		"grade": "C"
	},
	{
		"engine": "Tasman",
		"browser": "Internet Explorer 5.2",
		"platform": "Mac OS 8-X",
		"version": "1",
		"grade": "C"
	},
	{
		"engine": "Misc",
		"browser": "NetFront 3.1",
		"platform": "Embedded devices",
		"version": "-",
		"grade": "C"
	},
	{
		"engine": "Misc",
		"browser": "NetFront 3.4",
		"platform": "Embedded devices",
		"version": "-",
		"grade": "A"
	},
	{
		"engine": "Misc",
		"browser": "Dillo 0.8",
		"platform": "Embedded devices",
		"version": "-",
		"grade": "X"
	},
	{
		"engine": "Misc",
		"browser": "Links",
		"platform": "Text only",
		"version": "-",
		"grade": "X"
	},
	{
		"engine": "Misc",
		"browser": "Lynx",
		"platform": "Text only",
		"version": "-",
		"grade": "X"
	},
	{
		"engine": "Misc",
		"browser": "IE Mobile",
		"platform": "Windows Mobile 6",
		"version": "-",
		"grade": "C"
	},
	{
		"engine": "Misc",
		"browser": "PSP browser",
		"platform": "PSP",
		"version": "-",
		"grade": "C"
	},
	{
		"engine": "Other browsers",
		"browser": "All others",
		"platform": "-",
		"version": "-",
		"grade": "U"
	}
]
	};
	$('#example').dataTable( oInit );
	
	/* Basic checks */
	oTest.fnWaitTest( 
		"Length changing div exists",
		null,
		function () { return document.getElementById('example_length') != null; }
	);
	
	oTest.fnTest( 
		"Filtering div exists",
		null,
		function () { return document.getElementById('example_filter') != null; }
	);
	
	oTest.fnTest( 
		"Information div exists",
		null,
		function () { return document.getElementById('example_info') != null; }
	);
	
	oTest.fnTest( 
		"Pagination div exists",
		null,
		function () { return document.getElementById('example_paginate') != null; }
	);
	
	oTest.fnTest( 
		"Processing div is off by default",
		null,
		function () { return document.getElementById('example_processing') == null; }
	);
	
	oTest.fnWaitTest( 
		"10 rows shown on the first page",
		null,
		function () { return $('#example tbody tr').length == 10; }
	);
	
	oTest.fnTest( 
		"Initial sort occurred",
		null,
		function () { return $('#example tbody td:eq(0)').html() == "Gecko"; }
	);
	
	/* Need to use the WaitTest for sorting due to the setTimeout datatables uses */
	oTest.fnTest( 
		"Sorting (first click) on second column",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "All others"; }
	);
	
	oTest.fnTest( 
		"Sorting (second click) on second column",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "Seamonkey 1.1"; }
	);
	
	oTest.fnTest( 
		"Sorting (third click) on second column",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "All others"; }
	);
	
	oTest.fnTest( 
		"Sorting (first click) on numeric column",
		function () { $('#example thead th:eq(3)').click(); },
		function () { return $('#example tbody td:eq(3)').html() == "-"; }
	);
	
	oTest.fnTest( 
		"Sorting (second click) on numeric column",
		function () { $('#example thead th:eq(3)').click(); },
		function () { return $('#example tbody td:eq(3)').html() == "522.1"; }
	);
	
	oTest.fnTest( 
		"Sorting multi-column (first click)",
		function () { 
			$('#example thead th:eq(0)').click();
			oDispacher.click( $('#example thead th:eq(1)')[0], { 'shift': true } ); },
		function () { var b = 
			$('#example tbody td:eq(0)').html() == "Gecko" && 
			$('#example tbody td:eq(1)').html() == "Camino 1.0"; return b; }
	);
	
	oTest.fnTest( 
		"Sorting multi-column - sorting second column only",
		function () { 
			$('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "All others"; }
	);
	
	/* Basic paging */
	oTest.fnTest( 
		"Paging to second page",
		function () { $('#example_next').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "IE Mobile"; }
	);
	
	oTest.fnTest( 
		"Paging to first page",
		function () { $('#example_previous').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "All others"; }
	);
	
	oTest.fnTest( 
		"Attempting to page back beyond the first page",
		function () { $('#example_previous').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "All others"; }
	);
	
	/* Changing length */
	oTest.fnTest( 
		"Changing table length to 25 records",
		function () { $("select[name=example_length]").val('25').change(); },
		function () { return $('#example tbody tr').length == 25; }
	);
	
	oTest.fnTest( 
		"Changing table length to 50 records",
		function () { $("select[name=example_length]").val('50').change(); },
		function () { return $('#example tbody tr').length == 50; }
	);
	
	oTest.fnTest( 
		"Changing table length to 100 records",
		function () { $("select[name=example_length]").val('100').change(); },
		function () { return $('#example tbody tr').length == 57; }
	);
	
	oTest.fnTest( 
		"Changing table length to 10 records",
		function () { $("select[name=example_length]").val('10').change(); },
		function () { return $('#example tbody tr').length == 10; }
	);
	
	/*
	 * Information element
	 */
	oTest.fnTest(
		"Information on zero config",
		null,
		function () { return document.getElementById('example_info').innerHTML == "Showing 1 to 10 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information on second page",
		function () { $('#example_next').click(); },
		function () { return document.getElementById('example_info').innerHTML == "Showing 11 to 20 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information on third page",
		function () { $('#example_next').click(); },
		function () { return document.getElementById('example_info').innerHTML == "Showing 21 to 30 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information on last page",
		function () {
			$('#example_next').click();
			$('#example_next').click();
			$('#example_next').click();
		},
		function () { return document.getElementById('example_info').innerHTML == "Showing 51 to 57 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information back on first page",
		function () {
			$('#example_previous').click();
			$('#example_previous').click();
			$('#example_previous').click();
			$('#example_previous').click();
			$('#example_previous').click();
		},
		function () { return document.getElementById('example_info').innerHTML == "Showing 1 to 10 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information with 25 records",
		function () { $("select[name=example_length]").val('25').change(); },
		function () { return document.getElementById('example_info').innerHTML == "Showing 1 to 25 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information with 25 records - second page",
		function () { $('#example_next').click(); },
		function () { return document.getElementById('example_info').innerHTML == "Showing 26 to 50 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information with 100 records - first page",
		function () {
			$('#example_previous').click();
			$("select[name=example_length]").val('100').change();
		},
		function () { return document.getElementById('example_info').innerHTML == "Showing 1 to 57 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information back to 10 records",
		function () {
			$('#example_previous').click();
			$("select[name=example_length]").val('10').change();
		},
		function () { return document.getElementById('example_info').innerHTML == "Showing 1 to 10 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information with filter 'Win'",
		function () { $('#example_filter input').val("Win").keyup(); },
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter 'Win' second page",
		function () { $('#example_next').click(); },
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 11 to 20 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter 'Win' last page",
		function () {
			$('#example_next').click();
			$('#example_next').click();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 31 to 31 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter 'Win' back to first page",
		function () {
			$('#example_previous').click();
			$('#example_previous').click();
			$('#example_previous').click();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter 'Win' second page - second time",
		function () {
			$('#example_next').click();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 11 to 20 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter increased to 'Win 98'",
		function () { $('#example_filter input').val("Win 98").keyup(); },
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 9 of 9 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter decreased to 'Win'",
		function () { $('#example_filter input').val("Win").keyup(); },
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter 'Win' second page - third time",
		function () {
			$('#example_next').click();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 11 to 20 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter removed",
		function () { $('#example_filter input').val("").keyup(); },
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 57 entries"; }
	);
	
	
	/*
	 * Filtering
	 */
	oTest.fnWaitTest(
		"Filter 'W' - rows",
		function () { 
			/* Reset the table such that the old sorting doesn't mess things up */
			oSession.fnRestore();
			$('#example').dataTable( oInit );
			$('#example_filter input').val("W").keyup(); },
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "Gecko"; }
	);
	
	oTest.fnTest(
		"Filter 'W' - info",
		null,
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 42 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Filter 'Wi'",
		function () { $('#example_filter input').val("Wi").keyup(); },
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 32 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Filter 'Win'",
		function () { $('#example_filter input').val("Win").keyup(); },
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Filter 'Win' - sorting column 1",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() == "AOL browser (AOL desktop)"; }
	);
	
	oTest.fnTest(
		"Filter 'Win' - sorting column 1 info",
		null,
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Filter 'Win' - sorting column 1 reverse",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() == "Seamonkey 1.1"; }
	);
	
	oTest.fnTest(
		"Filter 'Win XP' - maintaining reverse sorting col 1",
		function () { $('#example_filter input').val("Win XP").keyup(); },
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() == "Internet Explorer 7"; }
	);
	
	oTest.fnTest(
		"Filter 'Win XP' - sorting col 3",
		function () { $('#example thead th:eq(3)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(3)').html() == "4"; }
	);
	
	oTest.fnTest(
		"Filter 'Win XP' - sorting col 3 - reversed",
		function () { $('#example thead th:eq(3)').click(); },
		function () { return $('#example tbody tr:eq(0) td:eq(3)').html() == "7"; }
	);
	
	oTest.fnTest(
		"Filter 'Win' - sorting col 3 - reversed info",
		null,
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 6 of 6 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Filter 'nothinghere'",
		function () { $('#example_filter input').val("nothinghere").keyup(); },
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == 
			"No matching records found"; }
	);
	
	oTest.fnTest(
		"Filter 'nothinghere' - info",
		null,
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 0 to 0 of 0 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Filter back to blank and 1st column sorting",
		function () {
			$('#example_filter input').val("").keyup();
			$('#example thead th:eq(0)').click();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Prefixing a filter entry",
		function () {
			$('#example_filter input').val("Win").keyup();
			$('#example_filter input').val("GeckoWin").keyup();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 0 to 0 of 0 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Prefixing a filter entry with space",
		function () {
			$('#example_filter input').val("Gecko Win").keyup();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 17 entries (filtered from 57 total entries)"; }
	);
	
	
	
	
	
	
	
	
	oTest.fnComplete();
} );