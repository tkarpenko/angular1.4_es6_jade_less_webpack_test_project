'use strict';

import angular      from 'angular';
import uirouter     from 'angular-ui-router';
import nganimate    from 'angular-animate';
import oclazyload   from 'oclazyload';
import ngScrollable from '../libs/ng-scrollable';
import uirouterExtras from '../libs/ct-ui-router-extras';

import AppRouting   from './app.config';
import AppCtrl      from './app.controller';
import AppInit      from './app.init';

import D_HomeModule       from './components/home/home.module';
import D_VideosModule     from './components/videos/videos.module';
import D_VideoModule      from './components/video/video.module';
import D_AutoplayModule   from './shared/modules/autoplay/autoplay.module';
import D_AuthModule       from './shared/modules/auth/auth.module';
import D_FormModule       from './shared/modules/form/form.module';
import D_ModalModule      from './components/modal/modal.module';
import D_SearchModule     from './components/search/search.module';
import D_SchedulerModule  from './components/scheduler/scheduler.module';

import D_HeaderModule        from './shared/modules/header/header.module';
import D_FooterModule        from './shared/modules/footer/footer.module';
import D_GradientTextModule  from './shared/modules/gradient-text/gradient-text.module';

import D_Services     from './shared/services';

export default angular
  .module('drones', [
    uirouter,
    nganimate,
    oclazyload,
    ngScrollable,
    uirouterExtras,

    D_HomeModule,
    D_VideosModule,
    D_VideoModule,
    D_AuthModule,
    D_FormModule,
    D_HeaderModule,
    D_FooterModule,
    D_ModalModule,
    D_SearchModule,
    D_SchedulerModule,
    D_GradientTextModule,
    D_AutoplayModule,
    
    D_Services
  ])
  .controller('appCtrl', AppCtrl)
  .config(AppRouting)
  .run(AppInit)
  .name;
