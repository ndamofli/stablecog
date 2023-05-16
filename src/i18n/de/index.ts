import type { Translation } from '../i18n-types';

const de: Translation = {
	Language: 'Sprache',
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
		GenerateButton: 'Generieren',
		PromptInput: {
			Placeholder: 'Porträt einer Katze von Van Gogh'
		},
		WidthTabBar: {
			Title: 'Breite',
			Paragraph: 'Die Breite des Bildes.'
		},
		HeightTabBar: {
			Title: 'Höhe',
			Paragraph: 'Die Höhe des Bildes.'
		},
		InferenceStepsTabBar: {
			Title: 'Interferenzschritte',
			Paragraph: 'Wie viele Schritte durchlaufen werden, um das Bild zu erzeugen.'
		},
		GuidanceScaleSlider: {
			Title: 'Ähnlichkeit (Guidance Scale)',
			Paragraph:
				'Wie ähnlich das Bild den Eingabewörtern ist. Je höher der Wert ist, umso ähnlicher wird das Bild.'
		},
		AspectRatioDropdown: {
			Title: 'Aspect Ratio',
			Paragraph: 'Aspect ratio of the image.',
			Options: {
				Square: 'Square (1:1)',
				Portrait: 'Portrait (2:3)',
				Landscape: 'Landscape (3:2)',
				Mobile: 'Mobile (9:16)',
				Desktop: 'Desktop (16:9)',
				Anamorphic: 'Anamorphic (2.4:1)',
				Squarish: 'Squarish (4:5)'
			}
		},
		AspectRatioTabBar: {
			Title: 'Aspect Ratio',
			Paragraph: 'Aspect ratio of the image.'
		},
		InitialImageTabBar: {
			Title: 'Initial Image',
			Paragraph: 'The generation will be created based on this image.'
		},
		InitialImageStrengthTabBar: {
			TitleAlt: 'Image Strength',
			Title: 'Initial Image Strength',
			Paragraph:
				'Controls the influence of the initial image. The bigger the value, the more influence the initial image has.'
		},
		NegativePromptInput: {
			Title: 'Wörter ausschließen',
			Placeholder: 'Wörter ausschließen',
			PlaceholderAlt: 'Enter things to avoid',
			Paragraph: 'Um ungewollte Dinge auszuschließen. Bewirkt das Gegenteil von Eingabewörtern.'
		},
		ImageInput: { Paragraph: 'Click or drop your image here', Title: 'Upload Image' },
		SeedInput: {
			Title: 'Seed',
			Placeholder: 'Seed-Nummer',
			Paragraph:
				'Wiederholbare Ergebnisse. Ein Seed-Nummer kombiniert mit denselben Eingabewörtern und den gleichen Optionen erzeugt das gleiche Bild.'
		},
		ModelDropdown: {
			Title: 'Modell',
			Paragraph: 'Das KI-Modell, das verwendet wird, um das Bild zu generieren.'
		},
		NumOutputsSlider: {
			Title: 'Number of Images',
			Paragraph: 'The number of images that will be generated.'
		},
		SchedulerDropdown: {
			Title: 'Zeitplaner',
			Paragraph:
				'Diffundiere das Bild auf eine bestimmte Art und Weise. Es kann das generierte Bild drastisch verändern. Einige benötigen weniger Schritte, um gute Ergebnisse zu erzielen.'
		},
		SubmitToGalleryQuestion: {
			Title: 'Generierte Bilder zur Galerie hinzufügen?',
			Paragraph: 'Du kannst deine Einstellungen später ändern.'
		}
	},
	Generate: {
		Grid: {
			NotSignedIn: { Paragraph: 'Sign in to see your generations.' },
			NoGeneration: {
				Paragraph: 'Your generations will appear here.'
			}
		}
	},
	History: {
		GenerationsTitle: 'Generierte Bilder',
		GenerationsMaxSavedCountWarning: 'Nur die letzten {count}',
		DownloadLegacyGenerationsButton: 'Legacy Generierungen herunterladen',
		NoFavoritesYet: "You don't have any favorites yet.",
		Views: {
			AllTitle: 'All',
			FavoritesTitle: 'Favorites'
		},
		NoGenerationsYet: 'Du hast noch keine Bilder generiert.'
	},
	Live: {
		GenerationsTitle: 'Generierte Bilder',
		TotalDurationTitle: 'Gesamtlaufzeit',
		UpscalesTitle: 'Hochskalierungen',
		GenerationTooltip: {
			AspectRatioTitle: 'Aspect Ratio',
			CountryTitle: 'Land',
			Type: {
				Title: 'Typ',
				Generation: 'Generierung',
				Upscale: 'Hochskalierung'
			},
			DimensionsTitle: 'Größe',
			StepsTitle: 'Schritte',
			ScaleTitle: 'Skalierung',
			DurationTitle: 'Laufzeit',
			Status: {
				Title: 'Status',
				Started: 'Gestartet',
				Succeeded: 'Erfolgreich',
				Failed: 'Fehlgeschlagen'
			},
			Server: {
				Title: 'Server',
				Default: 'Standard',
				Custom: 'Benutzerdefiniert'
			},
			UnknownTitle: 'Unbekannt',
			OutputsTitle: 'Ausgabe'
		},
		WaitingTitle: 'Warte auf Generierungen',
		DurationStatusUnknown: 'Unbekannt'
	},
	Navbar: {
		HomeTab: 'Start',
		GenerateTab: 'Generate',
		HistoryTab: 'Verlauf',
		GalleryTab: 'Galerie',
		AdminGalleryTab: 'Admin Gallery',
		PricingTab: 'Pricing',
		AccountTab: 'Account',
		LiveTab: 'Live'
	},
	Settings: {
		Title: 'Einstellungen',
		SwitchServerButton: 'Server wechseln',
		SubmitToGalleryToggle: 'Zur Galerie zufügen',
		AdvancedModeToggle: 'Erweiterter Modus',
		AdvancedOptionsDropdown: 'Erweiterte Einstellungen',
		AdvancedDropdown: 'Erweitert',
		GenerationSettingsButton: 'Generierungseinstellungen',
		GenerationSettingsTitle: 'Generierungseinstellungen',
		DarkModeToggle: 'Dunkel-Modus'
	},
	GenerationFullscreen: {
		DownloadButton: 'Download',
		DoneButtonState: 'Fertig!',
		CopyPromptButton: 'Eingabewörter kopieren',
		CopyNegativePromptButton: 'Ausgeschlossene Wörter kopieren',
		CopiedButtonState: 'Kopiert!',
		GenerateSimilarButton: 'Ähnliches generieren',
		RerollButton: 'Seed durchmischen',
		RegenerateButton: 'Erneut generieren',
		GenerateButton: 'Generieren',
		UpscaleButton: 'Hochskalieren',
		SubmitToGalleryButton: 'Für die Galerie einreichen',
		SubmittedTitle: 'Eingereicht',
		UpscaleTabBar: {
			UpscaledTitle: 'Hochskaliert',
			OriginalTitle: 'Original'
		},
		Dimensions: {
			Title: 'Größe'
		},
		Duration: {
			Title: 'Laufzeit'
		}
	},
	SetServerModal: {
		SetServerTitle: 'Server festlegen',
		SwitchServerTitle: 'Server wechseln',
		Paragraph: 'Der Server wird für das Generieren von Bildern verwendet.',
		SetButton: 'Speichern',
		DefaultButton: 'Standard'
	},
	Blog: {
		Title: 'Blog-Beiträge',
		TitleAlt: 'Blog',
		BackToBlogButton: 'Zurück zum Blog'
	},
	Redirect: {
		RedirectingToTitle: 'Weiterleitung zu {name}'
	},
	Shared: {
		StartGeneratingTitle: 'Beginne wunderschöne Bilder zu generieren!',
		StartGeneratingButton: 'Beginne zu generieren',
		JoinUsTitle: 'Folge uns',
		GoHomeButton: 'Zurück zur Startseite',
		SwitchToDefaultServerButton: 'Zum Standard-Server wechseln',
		JoinOnDiscord: 'Auf Discord beitreten',
		JoinUsOnTitle: 'Auf {name} folgen',
		ShareButton: 'Teilen',
		ShareOnButton: 'Auf {name} teilen',
		GoBackButton: 'Zurück',
		YesButton: 'Ja',
		NoButton: 'Nein',
		EnableButton: 'Aktivieren',
		DoneButton: 'Done',
		CancelButton: 'Cancel',
		ClearAllButton: 'Clear All',
		DisableButton: 'Deaktivieren',
		AddButton: 'Hinzufügen',
		CopyLinkButton: 'Link kopieren',
		CopyButton: 'Kopieren',
		DeleteButton: 'Löschen',
		LoadingTitle: 'Wird geladen',
		ContinueButton: 'Weiter',
		LoadingParagraph: 'Wird geladen...',
		InsufficientCreditsTitle: 'Unzureichendes Guthaben ({remainingCredits}/{neededCredits})',
		AllTitle: 'Alle',
		ConfirmButton: 'Bestätigen',
		ConfirmQuestionMarkButton: 'Confirm?',
		Credits: {
			CreditsTable: {
				CreditTypeTitle: 'Credit Type',
				RemainingCreditsTitle: 'Remaining',
				ExpiryTitle: 'Expiry',
				LastReplenish: 'Last Replenish'
			}
		},
		BatchEditBar: {
			PauseEditingButton: 'Pause Editing',
			DeselectButton: 'Deselect ({selectedCount})',
			DeleteButton: 'Delete ({selectedCount})',
			FavoriteButton: 'Favorite ({selectedCount})',
			ApproveButton: 'Approve ({selectedCount})',
			RejectButton: 'Reject ({selectedCount})',
			UnfavoriteButton: 'Unfavorite ({selectedCount})',
			ConfirmationModal: {
				CancelButton: 'Cancel',
				Deselect: {
					Title: 'Deselect {selectedCount} item(s)?',
					Paragraph: 'Are you sure you want to deselect {selectedCount} item(s)?',
					ConfirmButton: 'Deselect'
				},
				Delete: {
					Title: 'Delete {selectedCount} item(s)?',
					Paragraph: 'Are you sure you want to delete {selectedCount} item(s)?',
					ConfirmButton: 'Delete'
				},
				Favorite: {
					Title: 'Favorite {selectedCount} item(s)?',
					Paragraph: 'Are you sure you want to favorite {selectedCount} item(s)?',
					ConfirmButton: 'Favorite'
				},
				Unfavorite: {
					Title: 'Unfavorite {selectedCount} item(s)?',
					Paragraph: 'Are you sure you want to unfavorite {selectedCount} item(s)?',
					ConfirmButton: 'Unfavorite'
				}
			}
		},
		ServerUrlInput: {
			Placeholder: 'Server-URL'
		},
		EmailInput: {
			Placeholder: 'E-Mail'
		},
		PasswordInput: {
			Placeholder: 'Passwort'
		},
		ModelOptions: {
			'048b4aa3-5586-47ed-900f-f4341c96bdb2': {
				realName: 'Stabile Diffusion 1,5'
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
			'b7224e56-1440-43b9-ac86-66d66f9e8c91': {
				realName: 'P Sampler'
			}
		},
		UnknownTitle: 'Unbekannt',
		AdvancedSettingsButton: 'Advanced Settings',
		MoreOptionsTitle: 'Weitere Optionen',
		LessOptionsTitle: 'Weniger Optionen',
		TryAgainButton: 'Nochmals versuchen',
		RefreshButton: 'Aktualisieren',
		LoadMoreButton: 'Weitere laden',
		SearchingTitle: 'Suche…',
		NoResultsFoundTitle: 'Keine Ergebnisse gefunden'
	},
	Error: {
		SomethingWentWrong: 'Etwas ist schiefgelaufen :(',
		ImageWasNSFW: 'Dieses Bild war NSFW :(',
		NSFW: 'NSFW-Inhalt erkannt, versuche andere Eingabewörter :(',
		ServerSeemsOffline:
			'Der Server scheint offline zu sein. Versuche die Seite zu aktualisieren oder wechsle in den Einstellungen zu einem anderen Server.',
		ServerSetNotWorking: 'Dieser Server ist nicht kompatibel oder antwortet nicht.',
		NotFound: 'Nicht gefunden',
		SupabaseNotFoundCantListen: 'Supabase-Instanz nicht gefunden. Kann keine Generierung annehmen.',
		InvalidEmail: 'Bitte eine gültige E-Mail eingeben.',
		PasswordTooShort: 'Passwort muss mindestens 8 Zeichen lang sein.',
		SomethingWentWrongTryAgain: 'Etwas ist schiefgelaufen. Erneut versuchen.',
		InvalidCredentials: 'Ungültige Anmeldedaten.',
		InvalidCode: 'Ungültiger Code.',
		TryAnotherImage: 'Try another image :(',
		OnceEvery60Seconds: 'Du kannst nur einmal alle 60 Sekunden einen Link anfordern.',
		LinkExpired: {
			Title: 'Link abgelaufen',
			Paragraph: 'Der Link kann nur einmal verwendet werden und läuft nach 24 Stunden ab.'
		},
		UpdateAvailable: {
			Title: 'Aktualisierung verfügbar',
			Paragraph: 'Es gibt ein Update! Aktualisiere die Seite, um es zu erhalten.'
		},
		EmailProviderNotAllowed: 'Dieser E-Mail-Anbieter ist nicht zulässig.',
		EmailAlreadyInUse: 'Diese E-Mail-Adresse wird bereits verwendet.'
	},
	Admin: {
		AdminPanelTitle: 'Admin',
		DeleteButton: 'Löschen',
		ApproveButton: 'Freigeben',
		RejectButton: 'Ablehnen',
		EditButton: 'Bearbeiten',
		EditViewButton: 'Bearbeitungsansicht',
		NormalViewButton: 'Normale Ansicht',
		StopEditButton: 'Bearbeiten beenden',
		NoGenerationsToReview: 'Keine Generierung zu prüfen.',
		ServersButton: 'Server',
		AdminGalleryButton: 'Galerie',
		UsersButton: 'Benutzer',
		AdminTab: 'Admin',
		ServersTab: 'Server',
		AdminGalleryTab: 'Galerie',
		UsersTab: 'Benutzer',
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
			BanUserButton: 'Ban User',
			GiftCreditsButton: 'Gift Credits'
		},
		Gallery: {
			TotalTitle: 'Gesamt',
			ApprovedTitle: 'Freigegeben',
			DeletedTitle: 'Gelöscht',
			StatusDropdown: {
				All: 'Alle',
				ManuallySubmitted: 'Manually Submitted',
				Submitted: 'Eingereicht',
				Approved: 'Genehmigt',
				Rejected: 'Abgelehnt',
				Deleted: 'Gelöscht',
				Private: 'Privat'
			},
			NoGenerationsToReview: 'Keine Generierungen zu prüfen'
		}
	},
	SignUp: {
		PageTitle: 'Registrieren',
		PageParagraph:
			'Treten Sie Stablecog bei, um Pro Mitglied zu werden und sein volles Potenzial freizuschalten.',
		PageTitleConfirm: 'Bestätigen',
		PageTitleConfirmAlt: 'Überprüfe Deinen E-Mail-Posteingang',
		PageParagraphConfirm:
			'Wir haben dir einen 6-stelligen Code per E-Mail zugeschickt. Gib ihn unten ein, um dein Konto zu bestätigen.',
		SignUpButton: 'Registrieren',
		AllTitle: 'Alle',
		ConfirmButton: 'Bestätigen',
		AlreadyHaveAnAccountTitle: 'Hast Du bereits ein Konto?',
		LoginInsteadButton: 'Stattdessen anmelden',
		SixDigitCodeInput: {
			Placeholder: '6-stelliger Code'
		}
	},
	SignIn: {
		PageTitleGetStarted: 'Jetzt loslegen',
		GetStartedButton: 'Jetzt loslegen',
		PageTitle: 'Einloggen',
		PageParagraph: 'Benutze Stablecog mit allen Funktionen, die Deinem Konto zur Verfügung stehen.',
		PageParagraphV2: 'Start creating amazing art in seconds for free, no credit card required.',
		PageTitleCreateAccountOrSignIn: 'Registrieren oder einloggen',
		PageParagraphCreateAccountOrSignIn:
			'Benutze Stablecog mit allen Funktionen, die Deinem Konto zur Verfügung stehen.',
		PageTitleSentLink: 'Überprüfe Deinen E-Mail-Posteingang',
		PageParagraphSentLink:
			'Wir haben Dir einen Login-Link per E-Mail zugeschickt. Falls Du ihn nicht siehst, überprüfe Deinen Spam-Ordner.',
		ContinueButton: 'Weiter',
		ContinueWithProviderButton: 'Weiter mit {provider}',
		SignInWithProviderButton: 'Einloggen mit {provider}',
		OrContinueWithEmailTitle: 'Oder weiter mit E-Mail',
		DontHaveAnAccountTitle: 'Du hast noch kein Konto?',
		SignUpInsteadButton: 'Stattdessen registrieren',
		SignInButton: 'Einloggen',
		SignOutButton: 'Ausloggen'
	},
	Pro: {
		PageTitle: 'Auf Pro upgraden',
		PageParagraph:
			'Schalte alle Funktionen von Stablecog frei und unterstütze das Projekt. Ohne die Pro Mitglieder wäre Stablecog nicht in der Lage, völlig Open-Source zu bleiben und es für alle kostenlos anzubieten.',
		PageTitleAlreadyPro: 'Du bist schon ein Pro!',
		PageParagraphAlreadyPro:
			'Du bist bereits Pro-Mitglied. Danke, dass du das Projekt unterstützt! Viel Spaß mit Stablecog, und erwäge es, es mit deinen Freunden teilen.',
		ProPlanTitle: 'Pro',
		Features: {
			FullSpeed: 'Volle Geschwindigkeit ohne festgelegte Grenzwerte',
			ImageDimensions: 'Verschiedene Bildgrößen',
			Upscale: 'Bilder hochskalieren',
			Steps: 'Verschiedene Inferenzschritte',
			MoreModels: 'Mehr Modelle',
			MoreSchedulers: 'Mehr scheduler',
			SavedToCloud: 'Generierungen in der Cloud gespeichert',
			Upcoming: 'Zukünftige Funktionen',
			CommercialUse: 'Kommerzielle Nutzung'
		},
		Soon: '(bald)',
		Month: '/ Monat',
		BecomeProButton: 'Auf Pro upgraden',
		Success: {
			PageTitle: 'Du bist ein Pro!',
			PageParagraph:
				'Jetzt hast Du Zugriff auf alles, was Stablecog zu bieten hat. Wenn Du irgendwelche Fragen hast, kontaktiere uns gerne auf {platform}.'
		},
		Cancel: {
			PageTitle: 'Du hast abgebrochen',
			PageParagraph:
				'Du hast den Kaufvorgang abgebrochen. Wenn es ein Fehler war, kannst Du es erneut versuchen.'
		},
		Reason: {
			ParagraphWidth: 'Diese Bildbreite ist in der kostenlosen Version nicht verfügbar.',
			ParagraphHeight: 'Diese Bildbreite ist in der kostenlosen Version nicht verfügbar.',
			ParagraphDimensions: 'Diese Bildgröße ist in der kostenlosen Version nicht verfügbar.',
			ParagraphUpscale: 'Die Hochskalen-Funktion ist in der kostenlosen Version nicht verfügbar.',
			ParagraphInferenceSteps:
				'Diese Inferenzschritte sind in der kostenlosen Version nicht verfügbar.',
			ParagraphModel: 'Dieses KI-Modell ist in der kostenlosen Version nicht verfügbar.',
			ParagraphScheduler: 'Dieser Scheduler ist in der kostenlosen Version nicht verfügbar.',
			ParagraphWidthGeneration:
				'Diese Generierung wurde mit einer Bildbreite erzeugt, die in der kostenlosen Version nicht verfügbar ist.',
			ParagraphHeightGeneration:
				'Diese Generierung wurde mit einer Bildhöhe erzeugt, die in der kostenlosen Version nicht verfügbar ist.',
			ParagraphDimensionsGeneration:
				'Diese Generierung wurde mit einer Bildgröße erzeugt, die in der kostenlosen Version nicht verfügbar ist.',
			ParagraphInferenceStepsGeneration:
				'Diese Generierung wurde mit Interferenzschritten erzeugt, die in der kostenlosen Version nicht verfügbar sind.',
			ParagraphModelGeneration:
				'Diese Generierung wurde mit einem KI-Modell erzeugt, das in der kostenlosen Version nicht verfügbar ist.',
			ParagraphSchedulerGeneration:
				'Diese Generierung wurde mit einem Scheduler erzeugt, der in der kostenlosen Version nicht verfügbar ist.'
		},
		Tier: {
			Title: {
				Free: 'Kostenlos',
				Pro: 'Pro'
			},
			Badge: {
				Free: 'KOSTENLOS',
				Pro: 'PRO'
			}
		}
	},
	Account: {
		PageTitle: 'Benutzerkonto',
		ManageSubscriptionButton: 'Abonnements verwalten',
		ComparePlansButton: 'Abonnements vergleichen',
		ManageAccountButton: 'Benutzerkonto verwalten',
		AccountButton: 'Account',
		MyAccountButton: 'Mein Benutzerkonto',
		SubscriptionPlanTitle: 'Abonnement',
		RemainingImagesTitle: 'Verbleibende Bilder',
		RemainingCreditsTitle: 'Verbleibendes Guthaben',
		RemainingTitle: 'Verbleibend',
		Subscription: {
			UpdateSubscriptionTitle: 'Abonnement erneuern',
			ChangePlanTitle: 'Abonnement ändern',
			CurrentPlanTitle: 'Aktuelles Abonnement',
			NewPlanTitle: 'Neues Abonnement',
			Downgrade: {
				DowngradingToTitle: 'Downgrade auf',
				Explanation: 'Dein bestehendes Guthaben bleibt erhalten.'
			},
			Upgrade: {
				UpgadingToTitle: 'Upgraden auf',
				Explanation: 'Dein bestehendes Guthaben bleibt erhalten.'
			},
			Failed: {
				PageTitle: 'Update fehlgeschlagen',
				PageParagraph:
					'Beim Ändern des Abonnements ist etwas schiefgelaufen. Bitte versuche es erneut.'
			},
			Succeeded: {
				PageTitle: 'Abonnement geändert',
				PageParagraph: 'Dein Abonnement wurde erfolgreich geändert.'
			}
		},
		Tabs: { Account: 'Account', Usage: 'Usage', APIKeys: 'API Keys' },
		Meta: {
			AccountCreationTitle: 'Creation',
			LastSignInTitle: 'Last Sign-in',
			LastSeenTitle: 'Last Seen'
		},
		ChangeEmail: {
			PageTitle: 'E-Mail-Adresse ändern',
			PageParagraph: 'Gib eine E-Mail-Adresse für dein Benutzerkonto ein.',
			ChangeEmailButton: 'E-Mail-Adresse ändern',
			NewEmailInput: {
				Placeholder: 'Neue E-Mail-Adresse'
			},
			PageTitleSentLink: 'Überprüfe Deinen E-Mail-Posteingang',
			PageParagraphSentLink:
				'Wir haben Links zu beiden Adressen gesendet. Bestätige sie beide, um die E-Mail-Adresse Deines Kontos zu ändern.',
			PageTitleConfirmOtherEmail: 'Andere E-Mail bestätigen',
			PageParagraphConfirmOtherEmail:
				'Wir haben auch einen Link an Ihre andere E-Mail-Adresse gesendet. Bestätige sie, damit Du den Vorgang ebenfalls abschließen kannst.'
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
				Generate: 'Generate',
				Generation: 'Generation',
				Upscale: 'Upscale'
			},
			SourceType: {
				Web: 'Web',
				WebApp: 'Web App',
				API: 'API'
			},
			NoUsageYet: "You don't have any usage yet."
		},
		APIKeys: {
			PageTitle: 'API Keys',
			PageParagraph:
				'Your secret API keys are listed below. They are only shown once when you first generate them. Make sure to save them somewhere safe.',
			NoKeysYet: "You don't have any API keys yet.",
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
		PageTitle: 'Passwort zurücksetzen',
		PageParagraph:
			'Wir senden Dir per E-Mail einen 6-stelligen Code, um Dein Passwort zurückzusetzen.',
		SendResetCodeButton: 'Code senden',
		PageTitleConfirmCode: 'Bestätigen',
		PageTitleConfirmCodeAlt: 'Überprüfe Deinen E-Mail-Posteingang',
		PageParagraphConfirmCode:
			'Wir haben Dir einen 6-stelligen Code per E-Mail zugeschickt. Gib ihn unten ein, um Dein Konto zu bestätigen.',
		ConfirmCodeButton: 'Bestätigen',
		PageTitleNewPassword: 'Neues Passwort',
		PageParagraphNewPassword: 'Gib ein neues Passwort für dein Konto ein.',
		NewPasswordInput: {
			Placeholder: 'Neues Passwort'
		},
		SetNewPasswordButton: 'Neues Passwort setzen',
		PageTitleSuccess: 'Geschafft!',
		PageParagraphSuccess: 'Dein Passwort wurde erfolgreich zurückgesetzt.',
		ForgotPasswordButton: 'Passwort vergessen?'
	},
	FeaturedOn: {
		PageTitle: 'Wir sind gefeaturt auf'
	},
	Gallery: {
		PageTitle: 'Galerie',
		PageParagraph: 'Schau Dir an, was andere mit Stablecog erstellt haben.',
		SearchInput: {
			Title: 'Suche'
		},
		SearchingTitle: 'Suchen...',
		NoMatchingGenerationTitle: 'Nichts Passendes gefunden'
	},
	Pricing: {
		PlansTitle: 'Abonnements',
		PlansParagraph: 'Wähle ein Abonnement, das für dich geeignet ist.',
		CreditPacksTitle: 'Guthaben-Pakete',
		CreditPacksParagraph: 'Brauchst Du mehr? Du kannst jederzeit zusätzliches Guthaben erwerben.',
		SubscribeButton: 'Abonnieren',
		SubscribedButton: 'Abonniert',
		UpgradeButton: 'Upgraden',
		DowngradeButton: 'Downgraden',
		PurchaseButton: 'Kostenpflichtig Kaufen',
		BuyCreditsButton: 'Guthaben kaufen',
		MonthlyTitle: 'Monatlich',
		YearlyTitle: 'Jährlich',
		SlashMonth: '/ Monat',
		Plans: {
			FreeTitle: 'Gratis',
			StarterTitle: 'Starter',
			ProTitle: 'Pro',
			UltimateTitle: 'Ultimate'
		},
		CreditPacks: {
			MediumTitle: 'Mittleres Paket',
			LargeTitle: 'Großes Paket',
			MegaTitle: 'Mega Package'
		},
		Features: {
			MonthlyCredits: '{count} credits per month.',
			MonthlyImages: '{count} Bilder pro Monat.',
			MonthlyGenerations: '{count} Generierungen pro Monat.',
			ParallelGenerations: '{count} parallel generations.',
			Images: '%{count} Bilder.',
			Generations: '{count} Generierungen.',
			NeverExpires: 'Läuft nie ab.',
			CommercialUse: 'Kommerzielle Nutzung.',
			ImagesArePublic: 'Bilder sind öffentlich.',
			ImagesArePrivate: 'Bilder sind privat.'
		},
		Badges: {
			Recommended: 'Empfohlen',
			MostPopular: 'Am beliebtesten',
			BestValue: 'Bestes Preis-Leistungs-Verhältnis'
		},
		Purchase: {
			Succeeded: {
				PageTitle: 'Es kann los gehen!',
				PageParagraph:
					'Vielen Dank für Deinen Einkauf. Wenn Du Fragen hast, zögere nicht, uns auf {platform} zu kontaktieren.'
			},
			Cancelled: {
				PageTitle: 'Kauf abgebrochen',
				PageParagraph:
					'Du hast den Kaufvorgang abgebrochen. Wenn es ein Fehler war, kannst Du es erneut versuchen.'
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
		Title: 'Du hast wenig Guthaben ({remainingCredits})',
		FreeParagraph:
			'Täglich gewähren wir allen aktiven Nutzern kostenloses Guthaben. Du kannst mehr erhalten, indem Du ein Abonnement buchst oder an unseren Veranstaltungen teilnimmst.',
		HighestPlanParagraph: 'Du kannst ein Guthabenpaket kaufen.',
		OtherPlansParagraph:
			'Du kannst auf ein höheres Abonnement upgraden oder ein Guthaben-Paket kaufen.'
	},
	Support: {
		PageTitle: 'Support',
		PageParagraph:
			"If you have any questions, please reach out to us using the links below and we'll answer them as soon as possible."
	},
	Guide: {
		PageTitle: 'Guide',
		GuideButton: 'Guide',
		PreviousTitle: 'Previous',
		NextTitle: 'Next',
		ChaptersTitle: 'Chapters',
		ChapterTitle: 'Chapter'
	},
	Legal: {
		TermsOfServiceTitle: 'Terms of Service',
		PrivacyPolicyTitle: 'Privacy Policy',
		RefundPolicyTitle: 'Refund Policy',
		ContentPolicyTitle: 'Content Policy'
	},
	UnderDevelopment: {
		PageTitle: 'Wir sind bald wieder da!',
		PageParagraph: 'Wir upgraden unsere Systeme. Wir sind in ein paar Stunden wieder da.'
	}
};
export default de;
