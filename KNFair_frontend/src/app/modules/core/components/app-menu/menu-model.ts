
export const menuModel = [
    
    {label: 'Dashboard', icon: 'dashboard', routerLink: ['/']},
    {
        label: 'Menu Modes', icon: 'settings',
        items: [
            {label: 'Static Menu', icon: 'view_quilt', command: (event) => {this.app.layoutMode = 'static'; }},
            {label: 'Overlay Menu', icon: 'flip_to-front', command: (event) => {this.app.layoutMode = 'overlay'; }},
            {label: 'Horizontal Menu', icon: 'border_horizontal', command: (event) => {this.app.layoutMode = 'horizontal'; }},
            {label: 'Light Menu', icon: 'label', command: (event) => {this.app.darkMenu = false; }},
            {label: 'Dark Menu', icon: 'label_outline', command: (event) => {this.app.darkMenu = true; }},
            {
                label: 'Orientation', icon: 'format_align_right',
                items: [
                    {label: 'LTR', icon: 'format_align_left', command: (event) => {this.app.isRTL = false; }},
                    {label: 'RTL', icon: 'format_align_right', command: (event) => {this.app.isRTL = true; }}
                ]
            }
        ]
    },
    {
        label: 'Colors', icon: 'palette',
        items: [
            {
                label: 'Layout Palette', icon: 'palette',
                items: [
                    {
                        label: 'Flat', icon: 'format_paint',
                        items: [
                            {label: 'Blue Grey - Green', icon: 'brush', command: (event) => {this.changeLayout('bluegrey'); }},
                            {label: 'Indigo - Pink', icon: 'brush', command: (event) => {this.changeLayout('indigo'); }},
                            {label: 'Pink - Amber', icon: 'brush', command: (event) => {this.changeLayout('pink'); }},
                            {label: 'Deep Purple - Orange', icon: 'brush', command: (event) => {this.changeLayout('deeppurple'); }},
                            {label: 'Blue - Amber', icon: 'brush', command: (event) => {this.changeLayout('blue'); }},
                            {label: 'Light Blue - Blue Grey', icon: 'brush',
                                command: (event) => {this.changeLayout('lightblue'); }},
                            {label: 'Cyan - Amber', icon: 'brush', command: (event) => {this.changeLayout('cyan'); }},
                            {label: 'Teal - Red', icon: 'brush', command: (event) => {this.changeLayout('teal'); }},
                            {label: 'Green - Brown', icon: 'brush', command: (event) => {this.changeLayout('green'); }},
                            {label: 'Light Green - Purple', icon: 'brush', command: (event) => {this.changeLayout('lightgreen'); }},
                            {label: 'Lime - Blue Grey', icon: 'brush', command: (event) => {this.changeLayout('lime'); }},
                            {label: 'Yellow - Teal', icon: 'brush', command: (event) => {this.changeLayout('yellow'); }},
                            {label: 'Amber - Pink', icon: 'brush', command: (event) => {this.changeLayout('amber'); }},
                            {label: 'Orange - Indigo', icon: 'brush', command: (event) => {this.changeLayout('orange'); }},
                            {label: 'Deep Orange - Cyan', icon: 'brush', command: (event) => {this.changeLayout('deeporange'); }},
                            {label: 'Brown - Cyan', icon: 'brush', command: (event) => {this.changeLayout('brown'); }},
                            {label: 'Grey - Indigo', icon: 'brush', command: (event) => {this.changeLayout('grey'); }}
                        ]
                    },
                    {
                        label: 'Special', icon: 'format_paint',
                        items: [
                            {label: 'Reflection', icon: 'brush', command: (event) => {this.changeLayout('reflection'); }},
                            {label: 'Moody', icon: 'brush', command: (event) => {this.changeLayout('moody'); }},
                            {label: 'Cityscape', icon: 'brush', command: (event) => {this.changeLayout('cityscape'); }},
                            {label: 'Cloudy', icon: 'brush', command: (event) => {this.changeLayout('cloudy'); }},
                            {label: 'Storm', icon: 'brush', command: (event) => {this.changeLayout('storm'); }},
                            {label: 'Palm', icon: 'brush', command: (event) => {this.changeLayout('palm'); }},
                            {label: 'Flatiron', icon: 'brush', command: (event) => {this.changeLayout('flatiron'); }}
                        ]
                    },
                ]
            },
            {
                label: 'Themes', icon: 'brush', badge: '5',
                items: [
                    {label: 'Blue Grey - Green', icon: 'brush', command: (event) => {this.changeTheme('bluegrey'); }},
                    {label: 'Indigo - Pink', icon: 'brush', command: (event) => {this.changeTheme('indigo'); }},
                    {label: 'Pink - Amber', icon: 'brush', command: (event) => {this.changeTheme('pink'); }},
                    {label: 'Purple - Pink', icon: 'brush', command: (event) => {this.changeTheme('purple'); }},
                    {label: 'Deep Purple - Orange', icon: 'brush', command: (event) => {this.changeTheme('deeppurple'); }},
                    {label: 'Blue - Amber', icon: 'brush', command: (event) => {this.changeTheme('blue'); }},
                    {label: 'Light Blue - Blue Grey', icon: 'brush', command: (event) => {this.changeTheme('lightblue'); }},
                    {label: 'Cyan - Amber', icon: 'brush', command: (event) => {this.changeTheme('cyan'); }},
                    {label: 'Teal - Red', icon: 'brush', command: (event) => {this.changeTheme('teal'); }},
                    {label: 'Green - Brown', icon: 'brush', command: (event) => {this.changeTheme('green'); }},
                    {label: 'Light Green - Purple', icon: 'brush', command: (event) => {this.changeTheme('lightgreen'); }},
                    {label: 'Lime - Blue Grey', icon: 'brush', command: (event) => {this.changeTheme('lime'); }},
                    {label: 'Yellow - Teal', icon: 'brush', command: (event) => {this.changeTheme('yellow'); }},
                    {label: 'Amber - Pink', icon: 'brush', command: (event) => {this.changeTheme('amber'); }},
                    {label: 'Orange - Indigo', icon: 'brush', command: (event) => {this.changeTheme('orange'); }},
                    {label: 'Deep Orange - Cyan', icon: 'brush', command: (event) => {this.changeTheme('deeporange'); }},
                    {label: 'Brown - Cyan', icon: 'brush', command: (event) => {this.changeTheme('brown'); }},
                    {label: 'Grey - Indigo', icon: 'brush', command: (event) => {this.changeTheme('grey'); }}
                ]
            }
        ]
    },
    {
        label: 'Components', icon: 'list', badge: '2', badgeStyleClass: 'orange-badge',
        items: [
            {label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/sample']},
            {label: 'Forms', icon: 'input', routerLink: ['/forms']},
            {label: 'Data', icon: 'grid_on', routerLink: ['/data']},
            {label: 'Panels', icon: 'content_paste', routerLink: ['/panels']},
            {label: 'Overlays', icon: 'content_copy', routerLink: ['/overlays']},
            {label: 'Menus', icon: 'menu', routerLink: ['/menus']},
            {label: 'Messages', icon: 'message', routerLink: ['/messages']},
            {label: 'Charts', icon: 'insert_chart', routerLink: ['/charts']},
            {label: 'File', icon: 'attach_file', routerLink: ['/file']},
            {label: 'Misc', icon: 'toys', routerLink: ['/misc']}
        ]
    },
    {
        label: 'Template Pages', icon: 'get_app',
        items: [
            {label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/empty']},
            {label: 'Landing Page', icon: 'flight_land', url: '../../../../../assets/pages/landing.html', target: '_blank'},
            {label: 'Login Page', icon: 'verified_user', url: '../../../../../assets/pages/login.html', target: '_blank'},
            {label: 'Error Page', icon: 'error', url: '../../../../../assets/pages/error.html', target: '_blank'},
            {label: '404 Page', icon: 'error_outline', url: '../../../../../assets/pages/404.html', target: '_blank'},
            {label: 'Access Denied Page', icon: 'security', url: '../../../../../assets/pages/access.html', target: '_blank'}
        ]
    },
    {
        label: 'Menu Hierarchy', icon: 'menu',
        items: [
            {
                label: 'Submenu 1', icon: 'subject',
                items: [
                    {
                        label: 'Submenu 1.1', icon: 'subject',
                        items: [
                            {label: 'Submenu 1.1.1', icon: 'subject'},
                            {label: 'Submenu 1.1.2', icon: 'subject'},
                            {label: 'Submenu 1.1.3', icon: 'subject'},
                        ]
                    },
                    {
                        label: 'Submenu 1.2', icon: 'subject',
                        items: [
                            {label: 'Submenu 1.2.1', icon: 'subject'},
                            {label: 'Submenu 1.2.2', icon: 'subject'}
                        ]
                    },
                ]
            },
            {
                label: 'Submenu 2', icon: 'subject',
                items: [
                    {
                        label: 'Submenu 2.1', icon: 'subject',
                        items: [
                            {label: 'Submenu 2.1.1', icon: 'subject'},
                            {label: 'Submenu 2.1.2', icon: 'subject'},
                            {label: 'Submenu 2.1.3', icon: 'subject'}
                        ]
                    },
                    {
                        label: 'Submenu 2.2', icon: 'subject',
                        items: [
                            {label: 'Submenu 2.2.1', icon: 'subject'},
                            {label: 'Submenu 2.2.2', icon: 'subject'}
                        ]
                    },
                ]
            }
        ]
    },
    {label: 'Utils', icon: 'build', routerLink: ['/utils']},
    {label: 'Docs', icon: 'find_in_page', routerLink: ['/documentation']}
];