/*
   Copyright 2020, Stefan Uebe

   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
   documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
   rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
   permit persons to whom the Software is furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in all copies or substantial portions
   of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
   WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
   COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
   OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

   Exception of this license is the separately licensed part of the styles.
*/
import {FullCalendarScheduler} from '@vaadin/flow-frontend/full-calendar-scheduler.js';
import tippy from 'tippy.js';

export class FullCalendarWithTooltip extends FullCalendarScheduler {
    static get is() {
        return 'full-calendar-with-tooltip';
    }

    _initCalendar() {
        super._initCalendar();
        this.getCalendar().setOption("eventDidMount", this.callTooltip);
    }

    callTooltip(info) {
    	if (info.event.extendedProps && info.event.extendedProps.description && !info.isMirror) {
            tippy(info.el, {
                theme: 'light',
                content: info.event.extendedProps.description
            });
        }
    }
}

customElements.define(FullCalendarWithTooltip.is, FullCalendarWithTooltip);