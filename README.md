# Avocet Frontend Engineer Technical Test

Using the framework/library of your choosing, and consuming [Brewdog's Punk API V2](https://punkapi.com/documentation/v2) implement a simple web app with a card-based UI to display a list of beers. It should have the ability to view details of a specific beer. 

Most architecture and design aspects are left up to you to decide on, using your best judgement.

In case you can't complete some requirements, explanations on _why_ they couldn't be completed, and most importantly _how_ you would have solved them, are also taken into account

## Requirements

- [ ] Should be an npm compliant project (i.e. have a `package.json`)
- [ ] All required tasks should be executed via npm scripts (the scripts can be wrappers for grunt/gulp/webpack/other commands)
- [ ] Should support sorting based on:
    - Name
	- ABV
	- Volume
	- First brewed
- [ ] Should have a README file containing general information about the project and setup instructions

## Other considerations

- You can use any framework of your choosing, or no framework at all if you chose to
- Using [Webpack](https://webpack.js.org/) is a plus
- It's recommended you use a list or grid view to display the collection
- It's recommended you use a master/detail layout or detail only layout
- There's no design so you can use your best judgement in regards to UI layout

## API example endpoints

- Get beers list: `https://api.punkapi.com/v2/beers`
- Get beer by id: `https://api.punkapi.com/v2/beers/1`

> For more information on request parameters and API in general please go to [Brewdog's Punk API V2](https://punkapi.com/documentation/v2)

## API example beer object

```
{
	"abv": 6.5,
	"attenuation_level": 76,
	"boil_volume": ...,
	"brewers_tips": "Mix the powders into a paste before adding to the wort kettle. This will prevent the powders from balling up and not bringing the full flavour effect.",
	"contributed_by": "Sam Mason <samjbmason>",
	"description": "Never Mind the Anabolics, a 6.5% India Pale Ale brewed with copious amounts of performance-enhancing natural ingredients. Brewed to commemorate the 2012 Olympics and its merry marketing bandwagon.",
	"ebc": 23,
	"first_brewed": "06/2012",
	"food_pairing": ...,
	"ibu": 35,
	"id": 75,
	"image_url": "https://images.punkapi.com/v2/75.png",
	"ingredients": {
		...
	},
	"method": {
		...
	},
	"name": "Never Mind The Anabolics",
	"ph": 4.4,
	"srm": 11.5,
	"tagline": "Performance-Enhancing India Pale Ale.",
	"target_fg": 1012,
	"target_og": 1050,
	"volume": {
		"unit": "liters",
		"value": 20
	}
}
```