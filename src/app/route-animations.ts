import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from '@angular/animations';


const SlideLeft = [
  query(':enter, :leave',
    style({ position: 'fixed', width: '100%' }),
    { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(-100%)', opacity: '0%', filter: 'blur(1rem)'  }),
      animate('0.5s ease-in-out',
        style({ transform: 'translateX(0%)', opacity: '100%', filter: 'blur(0)'  }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out',
        style({ transform: 'translateX(100%)' }))
    ], { optional: true }),
  ])
]
const SlideRight = [
  query(':enter, :leave',
    style({ position: 'fixed',  width: '100%'}),
    { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(100%)', opacity: '0%', filter: 'blur(1rem)' }),
      animate('0.5s ease-in-out',
        style({ transform: 'translateX(0%)', opacity: '100%', filter: 'blur(0)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out',
        style({ transform: 'translateX(-100%)' }))
    ], { optional: true }),
  ])
]
const CrossFade = [
  query(':enter, :leave',
    style({ position: 'fixed',  width: '100%'}),
    { optional: true }),
  group([

    query(':leave', [
      style({ opacity: '100%'}),
      animate('0.5s ease-in-out',
        style({ opacity: '0%' }))
    ], { optional: true }),

    query(':enter', [
      style({ opacity: '0%', filter: 'blur(0.25rem)' }),
      animate('.75s ease-in-out',
        style({ opacity: '100%', filter: 'blur(0)' }))
    ], { optional: true })
  ])
]


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => Home', SlideLeft),
    transition('Home => *', SlideRight),
    transition('Projects <=> Project', CrossFade),
    transition('Home <=> Article', CrossFade),
    transition('Bio => *', SlideLeft),
    transition('* => Bio', SlideRight),
  ]);


