/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('offline', this.onGoOffline, false);
        document.addEventListener('online', this.onGoOnline, false);
        $(document).bind('pageload', this.onPageLoad);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        $.mobile.allowCrossDomainPages = true;
        $.mobile.phonegapNavigationEnabled = true;
        app.renderHome();
    },
    onGoOffline: function () {
        console.log('onGoOffline() <--');
        console.log('onGoOffline() -->');
    },
    onGoOnline: function () {
        console.log('onGoOnline() <--');
        console.log('onGoOnline() -->');
    },
    renderHome: function () {
        console.log('renderHome() <--');
        setTimeout(function () {
            $.mobile.changePage('page/index.html', {transition: 'slideup'});
        }, 200);

//        $.mobile.changePage($('div#index:jqmData(role=page)'));
//
//        var $body = $('body'),
//            $page = $body.find(':jqmData(role=page)');
//
//        $page.empty();
//        $page.haml([
//            [_.div, {'data-role': 'header'},
//                [_.h1, 'Умное приложение']
//            ],
//            [_.div, {'data-role': 'content'},
//                [_.p, 'Содержимое странички'],
//                [_.a, {href: '#', 'data-role': 'button', 'data-icon': 'star'}, 'Супер снопка']
//            ],
//            [_.div, {'data-role': 'footer'},
//                [_.h4, 'Подвал странички']
//            ]
//        ]);
        console.log('renderHome() -->');
    },
    /**
     * url, absUrl, dataUrl, options, xhr, textStatus
     */
    onPageLoad: function (event, data) {
        switch (data.url) {
            case 'page/index.html':
                var $page = $('div#index:jqmData(role=page)'),
                    $content = $page.find('div:jqmData(role=content)');
                $content.find('a#btn-super').click(function () {
                    $content.haml([_.a + '#btn-new', {href: '#', 'data-role': 'button', 'data-icon': 'home'}, 'Новая кнопка']).trigger('enchance');
                    $content.find('a#btn-new').click(function () {
                        alert('hello');
                    });
                });
                break;
        }
    }
};
