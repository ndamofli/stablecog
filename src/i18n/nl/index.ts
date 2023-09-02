import type { Translation } from '../i18n-types';

const nl: Translation = {
	Language: 'Taal',
	Landing: {
		Hero: { Title: 'Create amazing art in seconds with AI.' },
		Describe: {
			Title: 'Describe anything.',
			Paragraph:
				'Anything you like, in thousands of different styles. It’ll be generated by AI in seconds.',
			Prompt: 'majestic cat, psychedelic, violet tones, fantasy landscape'
		},
		InitImage: {
			Title: 'Or start with an image.',
			Paragraph: 'Give an input image, generate new art based on it.',
			Prompt: 'robot alien'
		},
		StartCreating: {
			Title: 'Start creating now!',
			Paragraph:
				'It’s free to try :) Give it a go, we think you’ll like it. Thousands of our users do.'
		},
		TryItNowButton: 'Try It Now',
		StartCreatingButton: 'Start Creating',
		GetStartedButton: 'Get Started'
	},
	Home: {
		GenerateButton: 'Genereren',
		PromptInput: { Title: 'Prompt', Placeholder: 'Portret van een kat door Van Gogh' },
		WidthTabBar: {
			Title: 'Breedte',
			Paragraph: 'De breedte van de afbeelding.'
		},
		HeightTabBar: {
			Title: 'Hoogte',
			Paragraph: 'De hoogte van de afbeelding.'
		},
		InferenceStepsTabBar: {
			Title: 'Inferentie stappen',
			Paragraph: 'De te nemen stappen om een afbeelding te genereren (diffuseren).'
		},
		GuidanceScaleSlider: {
			Title: 'Oriëntatie Schaal',
			Paragraph:
				'In welke mate je afbeelding gelijk is aan je prompt. Hogere waarden laten je afbeelding meer lijken op je prompt.'
		},
		AspectRatioDropdown: {
			Title: 'Beeldverhouding',
			Paragraph: 'Beeldverhouding van de afbeelding.',
			Options: {
				Square: 'Vierkant (1:1)',
				Portrait: 'Staand (2:3)',
				Landscape: 'Liggend (3:2)',
				Mobile: 'Mobiel (9:16)',
				Desktop: 'Desktop (16:9)',
				Anamorphic: 'Anamorphic (2.4:1)',
				Squarish: 'Vierkantachtig (4:5)'
			}
		},
		AspectRatioTabBar: {
			Title: 'Beeldverhouding',
			Paragraph: 'Beeldverhouding van de afbeelding.'
		},
		InitialImageTabBar: {
			Title: 'Initiële afbeelding',
			Paragraph: 'Het genereren zal worden uitgevoerd op basis van deze afbeelding.'
		},
		InitialImageStrengthTabBar: {
			TitleAlt: 'Image Strength',
			Title: 'Sterkte initiële afbeelding',
			Paragraph:
				'Bepaalt de invloed van de initiële afbeelding. Hoe groter de waarde, hoe meer invloed de initiële afbeelding heeft.'
		},
		NegativePromptInput: {
			Title: 'Negatieve Prompt',
			Placeholder: 'Negatieve prompt',
			PlaceholderAlt: 'Voer dingen in om te vermijden',
			Paragraph:
				'Om ongewenste dingen uit de afbeelding te verwijderen. Doet het tegenovergestelde van wat de prompt doet.'
		},
		ImageInput: {
			Paragraph: 'Click or drop your image here',
			Title: 'Upload Afbeelding'
		},
		SeedInput: {
			Title: 'Seed',
			Placeholder: 'Seed nummer',
			Paragraph:
				'Krijg herhaalbare resultaten. Een seed gecombineerd met dezelfde prompt en opties genereert dezelfde afbeelding.'
		},
		ModelDropdown: {
			Title: 'Model',
			Paragraph: 'Het AI-model dat gebruikt zal worden om een afbeelding te creëren.'
		},
		NumOutputsSlider: {
			Title: 'Aantal Afbeeldingen',
			Paragraph: 'Het aantal afbeeldingen dat zal worden gegenereerd.'
		},
		ShowOnProfileToggle: {
			Title: 'Show on Profile',
			Paragraph: 'Whether to show the generated images on your profile.'
		},
		SchedulerDropdown: {
			Title: 'Planner',
			Paragraph:
				'Diffusie van de afbeelding op een bepaalde manier. Het kan de gegenereerde afbeelding drastisch wijzigen. Sommigen vereisen minder stappen om goede resultaten te produceren.'
		},
		SubmitToGalleryQuestion: {
			Title: 'Stuur creaties naar de galerij?',
			Paragraph: 'Je kan later je voorkeur via de instellingen wijzigen.'
		}
	},
	Generate: {
		ShowSettingsButton: 'Show Settings',
		HideSettingsButton: 'Hide Settings',
		Grid: {
			NotSignedIn: { Paragraph: 'Sign in to see your generations.' },
			NoGeneration: {
				Paragraph: 'Your generations will appear here.'
			}
		}
	},
	History: {
		GenerationsTitle: 'Creaties',
		GenerationsMaxSavedCountWarning: 'Alleen de laatste {count}',
		DownloadLegacyGenerationsButton: 'Download Oudere Creaties',
		NoFavoritesYet: 'Je hebt nog geen favorieten.',
		Views: {
			AllTitle: 'Alles',
			FavoritesTitle: 'Favorieten'
		},
		NoGenerationsYet: 'Je hebt nog geen afbeeldingen aangemaakt.'
	},
	Live: {
		GenerationsTitle: 'Creaties',
		TotalDurationTitle: 'Totale Tijdsduur',
		UpscalesTitle: 'Opschalingen',
		VoiceoversTitle: 'Voiceovers',
		GenerationTooltip: {
			AspectRatioTitle: 'Beeldverhouding',
			CountryTitle: 'Land',
			Type: {
				Title: 'Type',
				Generation: 'Genereren',
				Upscale: 'Opschaling',
				Voiceover: 'Voiceover'
			},
			DimensionsTitle: 'Afmetingen',
			StepsTitle: 'Stappen',
			ScaleTitle: 'Schaal',
			DurationTitle: 'Tijdsduur',
			Status: {
				Title: 'Status',
				Started: 'Gestart',
				Succeeded: 'Geslaagd',
				Failed: 'Mislukt'
			},
			Server: {
				Title: 'Server',
				Default: 'Standaard',
				Custom: 'Aangepast'
			},
			UnknownTitle: 'Onbekend',
			OutputsTitle: 'Outputs'
		},
		WaitingTitle: 'Wachten op creaties',
		DurationStatusUnknown: 'Onbekend'
	},
	Navbar: {
		HomeTab: 'Home',
		GenerateTab: 'Generate',
		HistoryTab: 'Historie',
		GalleryTab: 'Galerij',
		AdminGalleryTab: 'Admin Gallery',
		PricingTab: 'Pricing',
		AccountTab: 'Account',
		VoiceoverTab: 'Voiceover',
		LiveTab: 'Live'
	},
	Settings: {
		Title: 'Instellingen',
		SwitchServerButton: 'Server wisselen',
		SubmitToGalleryToggle: 'Naar galerij versturen',
		AdvancedModeToggle: 'Geavanceerde modus',
		AdvancedOptionsDropdown: 'Geavanceerde opties',
		AdvancedDropdown: 'Geavanceerd',
		GenerationSettingsButton: 'Settings voor Genereren',
		GenerationSettingsTitle: 'Settings voor Genereren',
		DarkModeToggle: 'Donkere Modus'
	},
	GenerationFullscreen: {
		DownloadButton: 'Download',
		DoneButtonState: 'Gereed!',
		CopyPromptButton: 'Prompt kopiëren',
		CopyNegativePromptButton: 'Negatieve prompt kopiëren',
		CopiedButtonState: 'Gekopieerd!',
		GenerateSimilarButton: 'Vergelijkbaar genereren',
		ExploreSimilarButton: 'Explore Similar',
		ExploreStyleButton: 'Explore Style',
		RerollButton: 'Nieuwe seed',
		RegenerateButton: 'Opnieuw genereren',
		GenerateButton: 'Genereren',
		UpscaleButton: 'Opschalen',
		SimilarTitle: 'Similar',
		ShowOnProfileButton: 'Show on Profile',
		SubmitToGalleryButton: 'Naar galerij versturen',
		SubmittedTitle: 'Verstuurd',
		UpscaleTabBar: {
			UpscaledTitle: 'Opgeschaald',
			OriginalTitle: 'Origineel'
		},
		Dimensions: {
			Title: 'Afmetingen'
		},
		Duration: {
			Title: 'Tijdsduur'
		}
	},
	SetServerModal: {
		SetServerTitle: 'Server instellen',
		SwitchServerTitle: 'Server wisselen',
		Paragraph: 'De server zal worden gebruikt voor het genereren van afbeeldingen.',
		SetButton: 'Stel in',
		DefaultButton: 'Standaard'
	},
	Blog: {
		Title: 'Blogberichten',
		TitleAlt: 'Blog',
		ThanksForReading: 'Thanks for reading!',
		BackToBlogButton: 'Terug naar Blog'
	},
	Redirect: {
		RedirectingToTitle: 'Doorverwijzen naar {name}'
	},
	Shared: {
		StartGeneratingTitle: 'Start met het genereren van mooie afbeeldingen!',
		StartGeneratingButton: 'Begin met genereren',
		JoinUsTitle: 'Word lid',
		GoHomeButton: 'Ga naar Home',
		SwitchToDefaultServerButton: 'Overschakelen naar standaard server',
		JoinOnDiscord: 'Praat mee op Discord',
		JoinUsOnTitle: 'Volg ons op {name}',
		ShareButton: 'Delen',
		ShareOnButton: 'Delen op {name}',
		GoBackButton: 'Terug',
		YesButton: 'Ja',
		NoButton: 'Nee',
		EnableButton: 'Activeren',
		DoneButton: 'Done',
		CancelButton: 'Cancel',
		ClearAllButton: 'Alles wissen',
		DisableButton: 'Uitschakelen',
		DownloadButton: 'Download',
		AddButton: 'Voeg toe',
		CopyLinkButton: 'Link kopiëren',
		CopiedButton: 'Copied!',
		CopyButton: 'Kopiëren',
		DeleteButton: 'Verwijderen',
		LoadingTitle: 'Laden',
		ContinueButton: 'Verder',
		ProfileButton: 'Profile',
		VisitProfileButton: 'Visit Profile',
		YourProfileButton: 'Your Profile',
		LoadingParagraph: 'Laden...',
		InsufficientCreditsTitle: 'Onvoldoende credits ({remainingCredits}/{neededCredits})',
		AllTitle: 'Alles',
		ConfirmButton: 'Bevestigen',
		SimilarToTitle: 'Similar to: {item}',
		ResourcesTitle: 'Resources',
		ResourcesButton: 'Resources',
		On: 'On',
		Off: 'Off',
		BetaTitle: 'Beta',
		ConfirmQuestionMarkButton: 'Bevestigen?',
		Credits: {
			CreditsTable: {
				CreditTypeTitle: 'Type Credit',
				RemainingCreditsTitle: 'Resterend',
				ExpiryTitle: 'Vervaldatum',
				LastReplenish: 'Laatste Aanvulling'
			}
		},
		BatchEditBar: {
			PauseEditingButton: 'Bewerken pauzeren',
			DeselectButton: '({selectedCount}) deselecteren',
			DeleteButton: '({selectedCount}) verwijderen',
			FavoriteButton: '({selectedCount}) aan favorieten toevoegen',
			ApproveButton: '({selectedCount}) goedkeuren',
			RejectButton: '({selectedCount}) afwijzen',
			UnfavoriteButton: '({selectedCount}) uit favorieten verwijderen',
			ConfirmationModal: {
				CancelButton: 'Annuleren',
				Deselect: {
					Title: '{selectedCount} item(s) deselecteren?',
					Paragraph: 'Weet u zeker dat u {selectedCount} geselecteerde item(s) wilt verwijderen?',
					ConfirmButton: 'Deselecteren'
				},
				Delete: {
					Title: 'Verwijder {selectedCount} item(s)?',
					Paragraph: 'Weet je zeker dat je {selectedCount} geselecteerde item(s) wilt verwijderen?',
					ConfirmButton: 'Verwijderen'
				},
				Favorite: {
					Title: '{selectedCount} item(s) aan favorieten toevoegen?',
					Paragraph:
						'Weet je zeker dat je {selectedCount} geselecteerde item(s) aan favorieten wil toevoegen?',
					ConfirmButton: 'Toevoegen aan favorieten'
				},
				Unfavorite: {
					Title: '{selectedCount} item(s) uit favorieten verwijderen?',
					Paragraph: 'Weet je zeker dat je {selectedCount} item(s) uit favorieten wil verwijderen?',
					ConfirmButton: 'Verwijderen uit favorieten'
				}
			}
		},
		ServerUrlInput: {
			Placeholder: 'Server URL'
		},
		EmailInput: {
			Placeholder: 'E-mailadres'
		},
		PasswordInput: {
			Placeholder: 'Wachtwoord'
		},
		ProFeatures: {
			SubscribeTitle: 'Subscribe!',
			ChangeVisibilityFeatureParagraph:
				'Changing the visibility of this generation requires a subscription.'
		},
		ModelTags: {
			GoodAtTitle: 'Good at',
			Tags: {
				General: 'General',
				Realism: 'Realism',
				Anime: 'Anime',
				Render: 'Render',
				Drawing: 'Drawing',
				ThreeDArt: '3D',
				Abstract: 'Abstract'
			}
		},
		ModelOptions: {
			'048b4aa3-5586-47ed-900f-f4341c96bdb2': {
				realName: 'Stable Diffusion 1.5'
			},
			'8acfe4c8-751d-4aa6-8c3c-844e3ef478e0': {
				realName: 'Openjourney'
			},
			'36d9d835-646f-4fc7-b9fe-98654464bf8e': {
				realName: 'Arcane Diffusion'
			},
			'48a7031d-43b6-4a23-9f8c-8020eb6862e4': {
				realName: 'Ghibli Diffusion'
			},
			'790c80e1-65b1-4556-9332-196344389572': {
				realName: 'Mo-Di Diffusion'
			},
			'eaa438e1-dbf9-48fd-be71-206f0f257617': {
				realName: 'Redshift Diffusion'
			},
			'f7f3d973-ac6f-4a7a-9db8-e89e4fba03a9': {
				realName: 'Waifu Diffusion'
			},
			'fc06f6ab-ed14-4186-a7c0-aaec288d4f38': {
				realName: '22h Diffusion'
			},
			'b6c1372f-31a7-457c-907c-d292a6ffef97': {
				realName: 'Luna Diffusion'
			},
			'22b0857d-7edc-4d00-9cd9-45aa509db093': {
				realName: 'Kandinsky'
			},
			'9fa49c00-109d-430f-9ddd-449f02e2c71a': { realName: 'Kandinsky 2.2' },
			'8002bc51-7260-468f-8840-cf1e6dbe3f8a': { realName: 'SDXL' },
			'3fb1f6d9-c0d3-4ae4-adf4-77f8da78a6f7': { realName: 'Waifu Diffusion XL' },
			'a3636543-91cc-4290-b1a4-9d506457b9be': {
				realName: 'Freedom'
			}
		},
		SchedulerOptions: {
			'55027f8b-f046-4e71-bc51-53d5448661e0': {
				realName: 'LMS'
			},
			'6fb13b76-9900-4fa4-abf8-8f843e034a7f': {
				realName: 'Euler'
			},
			'af2679a4-dbbb-4950-8c06-c3bb15416ef6': {
				realName: 'Euler A.'
			},
			'9d175114-9a26-4371-861c-729ba9ecb4da': {
				realName: 'DPM Multistep'
			},
			'7e98751f-e135-4206-b855-48b141e7b98f': {
				realName: 'DPM Singlestep'
			},
			'82cf78dd-6afb-48cc-aca6-14224cca6950': {
				realName: 'DDIM'
			},
			'01e94c28-501d-4c6d-8f00-079f3230bf58': { realName: 'UniPC' },
			'cc1b8dbf-0aec-4e52-8110-8082506fb7ba': { realName: 'DDPM' },
			'b7224e56-1440-43b9-ac86-66d66f9e8c91': {
				realName: 'P Sampler'
			}
		},
		UnknownTitle: 'Onbekend',
		AdvancedSettingsButton: 'Geavanceerde instellingen',
		MoreOptionsTitle: 'Meer opties',
		LessOptionsTitle: 'Minder opties',
		TryAgainButton: 'Opnieuw proberen',
		RefreshButton: 'Vernieuwen',
		LoadMoreButton: 'Laad meer',
		BackToProfile: 'Back to Profile',
		BackToGalleryButton: 'Back to Gallery',
		SearchingTitle: 'Bezig met zoeken',
		NoResultsFoundTitle: 'Geen resultaten gevonden'
	},
	Error: {
		SomethingWentWrong: 'Er is iets mis gegaan :(',
		PromptWasNSFW: 'This prompt might produce sensitive content :(',
		ImageWasNSFW: 'Deze afbeelding was NSFW :(',
		NSFW: 'NSFW inhoud gedetecteerd, probeer een andere prompt :(',
		ServerSeemsOffline:
			'De server lijkt offline. Probeer de pagina te verversen of kies een andere server vanuit de instellingen.',
		ServerSetNotWorking: 'Deze server is niet compatibel of reageert niet.',
		NotFound: 'Niet Gevonden',
		SupabaseNotFoundCantListen:
			'Kan geen generaties bijhouden vanwege een onbekende Supabase instantie.',
		InvalidEmail: 'Voer een geldig e-mailadres in.',
		PasswordTooShort: 'Wachtwoord moet ten minste 8 tekens bevatten.',
		SomethingWentWrongTryAgain: 'Er is iets mis gegaan. Probeer het opnieuw.',
		InvalidCredentials: 'Ongeldige inloggegevens.',
		InvalidCode: 'Ongeldige code.',
		TryAnotherImage: 'Probeer een andere afbeelding :(',
		OnceEvery60Seconds: 'Je kunt slechts een keer per 60 seconden een link aanvragen.',
		LinkExpired: {
			TitleAlt: 'The link is expired',
			Title: 'Link is niet meer geldig',
			Paragraph: 'De link kan slechts één keer gebruikt worden en vervalt na 24 uur.'
		},
		UpdateAvailable: {
			Title: 'Update Beschikbaar',
			Paragraph: 'Er is een update! Vernieuw de pagina om deze te krijgen.'
		},
		EmailProviderNotAllowed: 'Deze e-mailprovider is niet toegestaan.',
		EmailNotAllowed: "This email isn't allowed.",
		EmailAlreadyInUse: 'Dit e-mailadres is al in gebruik.'
	},
	UpcomingCredits: {
		MorePaidPlanCreditsTooltip: {
			Title: 'More on the way!',
			Paragraph: 'Your credits will refresh:'
		},
		MoreFreeCreditsTooltip: {
			Title: 'More on the way!',
			Paragraph: "You'll receive more free credits:"
		}
	},
	Admin: {
		AdminPanelTitle: 'Admin',
		DeleteButton: 'Verwijderen',
		ApproveButton: 'Goedkeuren',
		RejectButton: 'Afwijzen',
		EditButton: 'Bewerken',
		EditViewButton: 'Weergave bewerken',
		NormalViewButton: 'Normale weergave',
		StopEditButton: 'Stop met bewerken',
		NoGenerationsToReview: 'Geen creaties om te evalueren.',
		ServersButton: 'Servers',
		AdminGalleryButton: 'Galerij',
		UsersButton: 'Gebruikers',
		AdminTab: 'Admin',
		ServersTab: 'Servers',
		AdminGalleryTab: 'Galerij',
		UsersTab: 'Gebruikers',
		Users: {
			ConfirmAction: {
				ConfirmActionReferenceText: 'I confirm the action',
				ConfirmActionParagraph: 'Type "{confirmActionText}" to confirm.',
				ConfirmActionInput: { Placeholder: 'Confirm' }
			},
			DataDeletedAtTitle: 'Data Deleted',
			WillBeDeletedTitle: 'Will Be Deleted',
			BannedAtTitle: 'Banned',
			BannedTitle: 'Banned',
			UnbanUserButton: 'Unban User',
			BanDomainButton: 'Ban Domain',
			UnbanDomainButton: 'Unban Domain',
			BanUserButton: 'Ban User',
			GiftCreditsButton: 'Cadeau Credits'
		},
		Gallery: {
			TotalTitle: 'Totaal',
			ApprovedTitle: 'Goedgekeurd',
			DeletedTitle: 'Verwijderd',
			StatusDropdown: {
				All: 'Alles',
				ManuallySubmitted: 'Handmatig verzonden',
				Submitted: 'Verzonden',
				Approved: 'Goedgekeurd',
				Rejected: 'Geweigerd',
				Deleted: 'Verwijderd',
				Private: 'Afgeschermd'
			},
			NoGenerationsToReview: 'Geen generaties om te beoordelen'
		}
	},
	SignUp: {
		PageTitle: 'Aanmelden',
		PageParagraph:
			'Sluit je aan bij Stablecog om pro lid te worden en alle mogelijkheden te ontgrendelen.',
		PageTitleConfirm: 'Bevestigen',
		PageTitleConfirmAlt: 'Check je e-mail',
		PageParagraphConfirm:
			'We hebben een 6-cijferige code naar je e-mailadres gestuurd. Voer deze hieronder in om uw account te bevestigen.',
		SignUpButton: 'Registreren',
		AllTitle: 'Alles',
		ConfirmButton: 'Bevestigen',
		AlreadyHaveAnAccountTitle: 'Heb je al een account?',
		LoginInsteadButton: 'Log dan in',
		WantsEmailCheckbox: {
			Paragraph: 'Get product updates, deals and news.',
			NoSpamParagraph: 'No spam, we promise.'
		},
		SixDigitCodeInput: {
			Placeholder: '6-Cijferige Code'
		}
	},
	SignIn: {
		PageTitleGetStarted: 'Aan de slag',
		GetStartedButton: 'Aan de slag',
		PageTitle: 'Inloggen',
		PageParagraph: 'Begin met Stablecog met alle functies die beschikbaar zijn op je account.',
		PageParagraphV2:
			'Begin binnen enkele seconden geweldige kunst te maken. Creditcard niet nodig.',
		PageTitleCreateAccountOrSignIn: 'Maak een account aan of log in',
		PageParagraphCreateAccountOrSignIn:
			'Begin met Stablecog met alle functies die beschikbaar zijn op je account.',
		PageTitleSentLink: 'Check je e-mail',
		PageParagraphSentLink:
			"We hebben je een aanmeldlink gestuurd. Als je 'm niet ziet, controleer dan je spamfolder.",
		ContinueButton: 'Verder',
		ContinueWithProviderButton: 'Ga verder met {provider}',
		SignInWithProviderButton: 'Inloggen met {provider}',
		OrContinueWithEmailTitle: 'Of ga verder met e-mail',
		DontHaveAnAccountTitle: 'Heb je nog geen account?',
		SignUpInsteadButton: 'Meld je dan aan',
		SignInButton: 'Inloggen',
		EnterCodeManuallyButton: 'Enter code manually',
		SignOutButton: 'Uitloggen'
	},
	ChangeUsername: {
		ChangeUsernameTitle: 'Change Username',
		ChangeUsernameButton: 'Change Username',
		UsernameInput: { Title: 'Username' },
		Error: {
			MinimumCharacters: 'Must be at least {count} characters.',
			MaximumCharacters: 'Must be at most {count} characters.',
			InvalidCharacters: 'Can only contain letters, numbers, and dashes.',
			NotAvailable: "This username isn't available."
		}
	},
	Pro: {
		PageTitle: 'Word een Pro',
		PageParagraph:
			'Ontgrendel alle functies van Stablecog en ondersteun het project. Zonder de pro-leden kan Stablecog niet volledig open source blijven en iedereen gratis kunnen laten genereren.',
		PageTitleAlreadyPro: 'Je bent al een Pro!',
		PageParagraphAlreadyPro:
			'Je bent al een pro lid. Bedankt voor het steunen van het project! Geniet van Stablecog, en overweeg het te delen met je vrienden.',
		ProPlanTitle: 'Pro',
		Features: {
			FullSpeed: 'Volledige snelheid zonder ingestelde limieten',
			ImageDimensions: 'Verschillende afbeeldingsafmetingen',
			Upscale: 'Afbeeldingen opschalen',
			Steps: 'Verschillende inferentie stappen',
			MoreModels: 'Meer modellen',
			MoreSchedulers: 'Meer planners',
			SavedToCloud: 'Creaties opgeslagen in de cloud',
			Upcoming: 'Aankomende features',
			CommercialUse: 'Commercieel gebruik'
		},
		Soon: '(binnenkort)',
		Month: '/maand',
		BecomeProButton: 'Word Pro',
		Success: {
			PageTitle: 'Je bent een Pro!',
			PageParagraph:
				'Je hebt nu toegang tot alles wat Stablecog te bieden heeft. Als je vragen hebt, neem dan contact met ons op via {platform}.'
		},
		Cancel: {
			PageTitle: 'Je hebt geannuleerd',
			PageParagraph:
				'Je hebt het abonnementproces geannuleerd. Als dit een vergissing was, probeer het dan opnieuw.'
		},
		Reason: {
			ParagraphWidth: 'Die afbeeldingsbreedte is niet beschikbaar op het gratis abonnement.',
			ParagraphHeight: 'Die afbeeldingshoogte is niet beschikbaar op het gratis abonnement.',
			ParagraphDimensions: 'Deze afbeeldingsafmetingen zijn niet beschikbaar op het gratis plan.',
			ParagraphUpscale: 'Opschaalfunctie is niet beschikbaar op het gratis abonnement.',
			ParagraphInferenceSteps:
				'Die instelling voor inferentie stappen is niet beschikbaar op het gratis abonnement.',
			ParagraphModel: 'Dat AI-model is niet beschikbaar op het gratis abonnement.',
			ParagraphScheduler: 'Die planner is niet beschikbaar op het gratis abonnement.',
			ParagraphWidthGeneration:
				'Die creatie is gemaakt met een afbeeldingsbreedte die niet beschikbaar is op het gratis abonnement.',
			ParagraphHeightGeneration:
				'Die creatie is gemaakt met een afbeeldingshoogte die niet beschikbaar is op het gratis abonnement.',
			ParagraphDimensionsGeneration:
				'Die creatie is gemaakt met afbeeldingsdimensies die niet beschikbaar zijn op het gratis abonnement.',
			ParagraphInferenceStepsGeneration:
				'Die creatie is gemaakt met een inferentie instelling die niet beschikbaar is op het gratis plan.',
			ParagraphModelGeneration:
				'Die creatie is gemaakt met een AI-model dat niet beschikbaar is op het gratis abonnement.',
			ParagraphSchedulerGeneration:
				'Die creatie is gemaakt met een planner die niet beschikbaar is op het gratis abonnement.'
		},
		Tier: {
			Title: {
				Free: 'Gratis',
				Pro: 'Pro'
			},
			Badge: {
				Free: 'GRATIS',
				Pro: 'PRO'
			}
		}
	},
	Account: {
		PageTitle: 'Account',
		ManageSubscriptionButton: 'Abonnement beheren',
		ComparePlansButton: 'Abonnementen vergelijken',
		ManageAccountButton: 'Account beheren',
		AccountButton: 'Account',
		MyAccountButton: 'Mijn account',
		SubscriptionPlanTitle: 'Abonnement',
		RemainingImagesTitle: 'Resterende afbeeldingen',
		RemainingCreditsTitle: 'Resterende credits',
		RemainingTitle: 'Resterend',
		SubscriptionStatusTitle: 'Subscription Status',
		SubscriptionRenewalTitle: 'Subscription Renewal',
		SubscriptionCancellationTitle: 'Subscription Cancellation',
		ManageSubscriptionTitle: 'Manage Subscription',
		ManageTitle: 'Manage',
		Subscription: {
			Status: { ActiveTitle: 'Active', CancellingTitle: 'Cancelling', CancelledTitle: 'Cancelled' },
			UpdateSubscriptionTitle: 'Abonnement bijwerken',
			ChangePlanTitle: 'Abonnement wijzigen',
			CurrentPlanTitle: 'Huidige abonnement',
			NewPlanTitle: 'Nieuw abonnement',
			Downgrade: {
				DowngradingToTitle: 'Downgraden naar',
				Explanation: 'Je bestaande credits blijven bestaan.'
			},
			Upgrade: {
				UpgadingToTitle: 'Upgraden naar',
				Explanation: 'Je bestaande credits blijven bestaan.'
			},
			Failed: {
				PageTitle: 'Bijwerken mislukt',
				PageParagraph:
					'Er is iets misgegaan tijdens het wijzigen van je abonnement. Probeer het opnieuw.'
			},
			Succeeded: {
				PageTitle: 'Abonnement gewijzigd',
				PageParagraph: 'Je abonnement is succesvol gewijzigd.'
			}
		},
		Tabs: { Account: 'Account', Usage: 'Usage', APIKeys: 'API Keys' },
		Meta: {
			AccountCreationTitle: 'Aanmaak',
			LastSignInTitle: 'Laatste aanmelding',
			LastSeenTitle: 'Laatst bekeken'
		},
		ChangeEmail: {
			PageTitle: 'E-mailadres wijzigen',
			PageParagraph: 'Voer een nieuw e-mailadres in voor je account.',
			ChangeEmailButton: 'E-mailadres wijzigen',
			NewEmailInput: {
				Placeholder: 'Nieuw e-mailadres'
			},
			PageTitleSentLink: 'Check je e-mail',
			PageParagraphSentLink:
				'We hebben links naar beide adressen gestuurd. Bevestig beide om het e-mailadres van je account te wijzigen.',
			PageTitleConfirmOtherEmail: 'Bevestig ander e-mailadres',
			PageParagraphConfirmOtherEmail:
				'We hebben ook een link naar je andere e-mailadres gestuurd. Bevestig deze ook om het proces te voltooien.'
		},
		Usage: {
			PageTitle: 'Usage',
			PageParagraph: 'You can see your recent usage below.',
			RecentUsageTitle: 'Recent Usage',
			UsageTable: {
				ID: 'ID',
				Type: 'Type',
				Duration: 'Duration',
				Source: 'Source',
				RunTime: 'Run Time',
				Cost: 'Cost',
				Operation: 'Operation',
				Process: 'Process',
				Platform: 'Platform'
			},
			UsageType: {
				Voiceover: 'Voiceover',
				Generate: 'Generate',
				Generation: 'Generation',
				Upscale: 'Upscale'
			},
			SourceType: {
				Web: 'Web',
				WebApp: 'Web App',
				DiscordBot: 'Discord Bot',
				API: 'API'
			},
			NoUsageYet: "You don't have any usage yet."
		},
		APIKeys: {
			PageTitle: 'API Keys',
			PageParagraph:
				'Your secret API keys are listed below. They are only shown once when you first generate them. Make sure to save them somewhere safe.',
			NoKeysYet: "You don't have any API keys yet.",
			CreateAPIKeyButton: 'Create API Key',
			CreateNewKeyButton: 'Create New Key',
			DeleteKeyButton: 'Delete Key',
			KeyTable: {
				NameTitle: 'Name',
				KeyTitle: 'Key',
				CreatedAtTitle: 'Created',
				UsageTitle: 'Usage',
				LastUsedTitle: 'Last Used',
				LastUsedNeverDescription: 'Never'
			},
			KeyModal: {
				Create: {
					Title: 'Create New Key',
					Paragraph:
						'You can optionally give this key a name. This name can be used for identifying the key.',
					Input: {
						Title: 'Name',
						TitleAlt: 'Name (optional)'
					},
					CreateKeyButton: 'Create Key'
				},
				Created: {
					Title: 'New Key',
					Paragraph:
						"Please save this secret key somewhere safe. For security reasons, you won't be able to view it again.",
					Input: {
						Title: 'Secret Key'
					}
				},
				Delete: {
					Title: 'Revoke Key',
					Paragraph:
						"This key will disabled immediately. Requests made using this key will be rejected. Once revoked, you won't be able to view this key again.",
					RevokeKeyButton: 'Revoke Key'
				}
			}
		}
	},
	ForgotPassword: {
		PageTitle: 'Wachtwoord Resetten',
		PageParagraph:
			'We sturen een 6-cijferige code naar je e-mailadres om je wachtwoord te kunnen resetten.',
		SendResetCodeButton: 'Verstuur code',
		PageTitleConfirmCode: 'Bevestigen',
		PageTitleConfirmCodeAlt: 'Check je e-mail',
		PageParagraphConfirmCode:
			'We hebben je een 6-cijferige code gestuurd. Voer deze hieronder in om verder te gaan.',
		ConfirmCodeButton: 'Bevestigen',
		PageTitleNewPassword: 'Nieuw Wachtwoord',
		PageParagraphNewPassword: 'Voer een nieuw wachtwoord in voor je account.',
		NewPasswordInput: {
			Placeholder: 'Nieuw Wachtwoord'
		},
		SetNewPasswordButton: 'Nieuw wachtwoord instellen',
		PageTitleSuccess: 'Gereed!',
		PageParagraphSuccess: 'Je wachtwoord reset is geslaagd.',
		ForgotPasswordButton: 'Wachtwoord vergeten?'
	},
	FeaturedOn: {
		PageTitle: 'We Zijn Uitgelicht Op'
	},
	Gallery: {
		PageTitle: 'Galerij',
		PageParagraph: 'Bekijk wat anderen met Stablecog hebben gecreëerd.',
		SearchInput: {
			Title: 'Zoeken'
		},
		BackToProfile: 'Back to Profile',
		BackToGalleryButton: 'Back to Gallery',
		SearchingTitle: 'Bezig met zoeken',
		NoMatchingGenerationTitle: 'Geen overeenkomstige creatie gevonden'
	},
	Pricing: {
		PlansTitle: 'Abonnementen',
		PlansParagraph: 'Kies een abonnement dat bij je past.',
		CreditPacksTitle: 'Credit Bundels',
		CreditPacksParagraph: 'Heb je meer nodig? Je kunt op elk moment extra credits kopen.',
		SubscribeButton: 'Abonneren',
		SubscribedButton: 'Geabonneerd',
		UpgradeButton: 'Upgraden',
		DowngradeButton: 'Downgraden',
		PurchaseButton: 'Kopen',
		BuyCreditsButton: 'Credits kopen',
		MonthlyTitle: 'Per maand',
		YearlyTitle: 'Op jaarbasis',
		SlashMonth: '/maand',
		Plans: {
			FreeTitle: 'Gratis',
			StarterTitle: 'Beginner',
			ProTitle: 'Pro',
			UltimateTitle: 'Ultiem'
		},
		CreditPacks: {
			MediumTitle: 'Medium Bundel',
			LargeTitle: 'Grote Bundel',
			MegaTitle: 'Mega Bundel'
		},
		Features: {
			MonthlyCredits: '{count} credits per maand.',
			MonthlyImages: '{count} afbeeldingen per maand.',
			MonthlyGenerations: '{count} creaties per maand.',
			ParallelGenerations: '{count} parallel generations.',
			Images: '{count} afbeeldingen.',
			Generations: '{count} creaties.',
			NeverExpires: 'Verloopt nooit.',
			CommercialUse: 'Commercieel gebruik.',
			ImagesArePublic: 'Afbeeldingen zijn openbaar.',
			ImagesArePrivate: 'Afbeeldingen zijn privé.'
		},
		Badges: {
			Recommended: 'Aanbevolen',
			MostPopular: 'Populairst',
			BestValue: 'Meeste voordeel'
		},
		Purchase: {
			Succeeded: {
				PageTitle: 'Je bent helemaal klaar!',
				PageParagraph:
					'Bedankt voor je aankoop. Als je vragen hebt, neem dan gerust contact met ons op via {platform}.'
			},
			Cancelled: {
				PageTitle: 'Aankoop geannuleerd',
				PageParagraph:
					'Je hebt het aankoopproces geannuleerd. Als dit per vergissing was, probeer het dan opnieuw.'
			}
		}
	},
	FAQ: {
		Title: 'FAQ',
		TitleAlt: 'Frequently Asked Questions',
		Questions: {
			CommercialUse: {
				Question: 'Can I use the images commercially?',
				Answer:
					'If you create an image while you are subscribed to a plan (Starter, Pro or Ultimate), you can use that image commercially even if you cancel your plan afterwards at some point. If you are on the free plan, the images you create are for personal use only.'
			},
			MoreCredits: {
				Question: 'Can I buy more credits?',
				Answer:
					'Yes, you can buy more credits anytime as long as you have an active subscription. You can visit the account or the pricing page to buy more credits.'
			},
			CreditRollOver: {
				Question: 'Do credits roll over to the next month?',
				Answer:
					'No, credits do not roll over to the next month. Your credits will reset every month on your billing date.'
			},
			PlanUpgradeOrDowngrade: {
				Question: 'Can I upgrade or downgrade my plan?',
				Answer:
					"Yes, you can upgrade or downgrade your plan anytime. If you upgrade your plan, you'll keep the remaining credits from your previous plan too until they expire. The upgraded plan will be charged immediately, and fully."
			},
			PlanCancellation: {
				Question: 'Can I cancel my plan anytime?',
				Answer:
					'Yes, you can cancel your plan anytime and billing will stop at the end of that billing cycle. You will also keep your credits until the billing cycle ends.'
			},
			MoreQuestions: {
				Question: 'Where can I ask more questions?',
				Answer:
					'You can join our {Discord} to ask us anything. We are happy to help. You can also reach out via {Twitter} or {email}.',
				Parts: {
					Discord: 'Discord community',
					Email: 'email',
					Twitter: 'Twitter'
				}
			}
		}
	},
	LowOnCreditsCard: {
		Title: 'Je hebt nog maar weinig credits over ({remainingCredits})',
		FreeWithMoreOnTheWay: {
			Paragraph:
				"Get more now by subscribing to a plan or participating in our events. You'll receive more free credits soon:"
		},
		FreeParagraph:
			'We geven alle actieve gebruikers dagelijks gratis credits. Je kunt er meer krijgen door een abonnement aan te schaffen of door deel te nemen aan onze evenementen.',
		HighestPlanParagraph: 'Je kunt een creditbundel kopen.',
		OtherPlansParagraph: 'Je kunt upgraden naar een hoger abonnement of een creditbundel kopen.'
	},
	Contact: {
		PageTitle: 'Contact',
		PageParagraph:
			"If you have any inquiries or a questions, don't hesitate to reach out to us using the links below. We'll answer as soon as possible."
	},
	Support: {
		PageTitle: 'Ondersteuning',
		PageParagraph:
			'Als je vragen hebt, neem dan contact met ons op via onderstaande links en we zullen ze zo snel mogelijk beantwoorden.'
	},

	Guide: {
		PageTitle: 'Handleiding',
		GuideButton: 'Handleiding',
		PreviousTitle: 'Terug',
		EndpointsTitle: 'Endpoints',
		EndpointTitle: 'Endpoint',
		NextTitle: 'Verder',
		ChaptersTitle: 'Hoofdstukken',
		ChapterTitle: 'Hoofdstuk'
	},
	Try: { PageTitle: 'Try' },
	Legal: {
		PageTitle: 'Legal',
		PageParagraph: 'Our terms and policies are listed below.',
		TermsOfServiceTitle: 'Gebruiksvoorwaarden',
		PrivacyPolicyTitle: 'Privacybeleid',
		RefundPolicyTitle: 'Restitutiebeleid',
		ContentPolicyTitle: 'Inhoudsbeleid'
	},
	Documentation: {
		PageTitle: 'Documentation',
		PageTitleAlt: 'API Reference',
		APIReferenceButton: 'API Reference',
		DocumentationButton: 'Documentation',
		ForDevelopersTitle: 'For Developers'
	},
	Scl: {
		Discord: 'Discord',
		Email: 'Email',
		Twitter: 'Twitter',
		Instagram: 'Instagram',
		YouTube: 'YouTube',
		LinkedIn: 'LinkedIn',
		Reddit: 'Reddit',
		GitHub: 'GitHub',
		Telegram: 'Telegram',
		Facebook: 'Facebook',
		ProductHunt: 'Product Hunt'
	},
	Voiceover: {
		ModelOptions: { '0f442a3e-cf53-490b-b4a9-b0dda63e9523': { Name: 'Bark' } },
		SpeakerOptions: {
			'82bc1e69-2aa3-4317-9bc9-d9ed2afad0ff': {
				Name: 'Paul'
			},
			'39f7fc5d-9031-4932-a4d5-b196bb06e203': {
				Name: 'Jony'
			},
			'0140c5dc-af12-4643-bfec-650d3cd03c56': { Name: 'Bryan' },
			'4a19f17c-eedc-4cf8-a45d-1f9d69547125': { Name: 'Rachel' },
			'2e4e9572-2ea6-48a3-b134-381c68c9d516': { Name: 'Ella' },
			'2364bfb5-cdce-4a30-b979-a12f9f49cd39': { Name: 'Alice' },
			'91bf1331-a234-4478-a2a5-4dba4ac647fc': { Name: 'Olivia' },
			'3aebf12b-a7b8-41cf-9411-5808a231138e': { Name: 'Daniel' },
			'b8e5e45b-4fe3-4a0f-9fa6-5893c67287c0': { Name: 'Thomas' },
			'aad61bf9-0710-40f6-8050-8c412852f717': { Name: 'Henry' },
			'37c069ec-f124-4be8-9d4c-e74157738877': { Name: 'Liam' },
			'38f9bd69-fa4c-4e53-b398-9a0f5865e927': { Name: 'Dan' },
			'5bd0610f-f073-487e-a74c-2a89105ce282': { Name: 'Gamze' },
			'7c3f8e30-9957-4d5e-a70e-c8269ff5f550': { Name: 'Mert' },
			'0188871e-c4d1-4ad9-ab3d-ec958c443822': { Name: 'Halit' },
			'4802af70-6d40-429d-8b9d-8df591e30743': { Name: 'Leyla' },
			'e10d4dac-7c39-4e96-9622-6d4e46fc384b': { Name: 'Murat' },
			'9354180b-9735-412c-947f-9d15af6edfe0': { Name: 'Mia' },
			'bcb7ac57-fd61-4630-82f0-ae3f836bb7c2': { Name: 'Eizo' },
			'b7542bad-e5fc-4c02-89ce-0ec22f6deceb': { Name: 'Ai' },
			'2cdb9e2c-42c1-49d0-959b-43d4bfc1828f': { Name: 'Shinya' },
			'37bb1326-d83e-425a-b21a-1a03ffea4d05': { Name: 'Emi' },
			'1eca6e55-53fb-4d70-995f-7e4da9266574': { Name: 'Emika' },
			'4f5c8c3e-0a17-4a68-8be7-1a126fda9a0f': { Name: 'Adriana' },
			'9206e75b-2b28-47f0-899e-76ab476e1c3f': { Name: 'Jorge' },
			'573c37c7-f741-4d36-80dc-f126131c6343': { Name: 'Carmen' },
			'b06d6333-1e35-45a6-b18b-3187d34cc387': { Name: 'Pedro' },
			'90ba9324-476b-48ae-b88e-aed1975a51fd': { Name: 'David' },
			'babbbc15-5040-4e97-a89f-8309b13d7785': { Name: 'Annika' },
			'cafafcaa-45bf-45e0-901c-8ca63575ad2a': { Name: 'Leonie' },
			'31d7c264-b674-422b-9b8f-13195c3289b6': { Name: 'Fritz' },
			'b349543b-c727-4934-9f4f-249aa2a6b184': { Name: 'Wilhelm' },
			'c4796108-0e8a-4a7a-9a8a-bb66ff21e215': { Name: 'Hans' },
			'83c0ee48-c8ef-4a4c-bca8-9dae843d25da': { Name: 'Boris' },
			'947786c1-810d-44ce-808f-cdcf732d97fd': { Name: 'Alisa' },
			'2885a060-badc-4896-a4fa-f3656a58bb82': { Name: 'Ivan' },
			'92929922-0608-4b62-8a0d-f9d87a4ca2f5': { Name: 'Oleg' },
			'cb8a2dc4-fce9-4f17-b977-050aa78d8101': { Name: 'Xin' },
			'5001a3c9-557c-4775-ad6f-b71c47c3b4f1': { Name: 'Ming' },
			'd45f479f-42e5-4f15-b1a0-c9feabcdb3aa': { Name: 'Hu' },
			'56714211-532c-479b-ac8f-f2449af2310a': { Name: 'Shuang' },
			'052b721a-da7e-4614-b352-826411c262e2': { Name: 'Wan' }
		},
		List: {
			NotSignedIn: { Paragraph: 'Sign in to see your voiceovers.' },
			NoVoiceovers: { Paragraph: 'Your voiceovers will appear here.' }
		},
		Generate: {
			SpeakerParagraph: '{speakerName} will be speaking in {languageName}.',
			VoiceoverParagraph: 'The voiceover will appear here.'
		},
		PromptBar: {
			GenerateButton: 'Generate',
			CreditCost: '{creditCost} credit(s)',
			PromptInput: {
				Placeholder: 'Technology is a bridge between imagination and reality.'
			}
		},
		Settings: {
			Speaker: {
				Title: 'Speaker',
				Paragraph: 'The speaker for the voiceover.'
			},
			Language: {
				Title: 'Language',
				Paragraph: 'The language for the voiceover.'
			},
			VoiceStability: {
				Title: 'Voice Stability',
				Paragraph:
					'The stability level of the voice. Higher values make the voice more stable, lower values make it more variable.',
				Slider: {
					MoreStable: 'More stable',
					MoreVariable: 'More variable'
				}
			},
			DenoiseAudio: {
				Title: 'Denoise',
				Paragraph: 'Remove background noise from the audio.'
			},
			RemoveSilence: {
				Title: 'Remove Silence',
				Paragraph: 'Remove silent parts from the audio.'
			}
		},
		PlayButton: 'Play',
		PauseButton: 'Pause',
		MuteButton: 'Mute',
		UnmuteButton: 'Unmute'
	},
	Connect: {
		PageTitle: 'Connect',
		PageParagraph:
			'Click the button below to connect your {platform} account to your Stablecog account.',
		PageSuccessTitle: 'Connected!',
		ConnectButton: 'Connect',
		ReturnBackToParagraph: 'You can return back to {platform} now.',
		NoPlatformTokenParagraph:
			"This link doesn't contain a {platform} token. Please request a new link.",
		NoPlatformIDParagraph: "This link doesn't contain a {platform} ID. Please request a new link.",
		NoPlatformUsernameParagraph:
			"This link doesn't contain a {platform} username. Please request a new link.",
		Platform: {
			Discord: 'Discord',
			Stablecog: 'Stablecog'
		},
		ConnectToTitle: 'Connect to {platform}',
		ConnectToParagraph:
			'Create an account or sign in to connect your {platform} account to your Stablecog account.',
		Error: {
			InvalidToken: 'The token is invalid. Please request a new link via {platform}.',
			AlreadyLinked: 'Your account already has a {platform} account associated with it.'
		}
	},
	ShareCard: {
		Title: 'Share',
		Message: 'Check out this generation on Stablecog!',
		MessageUsersOwn: 'Check out my generation on Stablecog!'
	},
	UnderDevelopment: {
		PageTitle: 'We zijn snel weer terug!',
		PageParagraph: 'We zijn onze systemen aan het upgraden. Over een paar uur zijn we weer terug.'
	}
};
export default nl;
