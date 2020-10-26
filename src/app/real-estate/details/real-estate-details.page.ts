import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { RealEstateDetailsModel } from './real-estate-details.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-real-estate-details',
  templateUrl: './real-estate-details.page.html',
  styleUrls: [
    './styles/real-estate-details.page.scss',
    './styles/real-estate-details.shell.scss'
  ]
})
export class RealEstateDetailsPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;

  details: RealEstateDetailsModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptions = this.route.data
    .pipe(
      // Extract data for this page
      switchMap((resolvedRouteData: IResolvedRouteData<RealEstateDetailsModel>) => {
        return ResolverHelper.extractData<RealEstateDetailsModel>(resolvedRouteData.data, RealEstateDetailsModel);
      })
    )
    .subscribe((state) => {
      this.details = state;
    }, (error) => console.log(error));
  }

  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave(): void {
    this.subscriptions.unsubscribe();
  }
}
