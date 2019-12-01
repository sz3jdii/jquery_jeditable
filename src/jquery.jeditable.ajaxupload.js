/*
 * Ajaxupload for Jeditable
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Depends on Ajax fileupload jQuery plugin by PHPLetter guys:
 *   http://www.phpletter.com/Our-Projects/AjaxFileUpload/
 *
 * Project home:
 *   http://www.appelsiini.net/projects/jeditable
 *
 * Revision: $Id$
 *
 */

$.editable.addInputType('file', {
    /* create input element */
    element: function (settings) {
        settings.onblur = 'ignore';
        var input = $('<input type="file" id="file" name="file" />');
        $(this).append(input);
        return (input);
    }
});
