// Primary weapons
const primaryWeapons = [
    {
        name: "XM4",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Blandwell 7x Scope", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip", "Launcher - Standard", "Launcher - Smoke", "Launcher - High Explosive", "Launcher - Drill Charge"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Flip Mag", "Extended Mag III", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "5.56 NATO Overpressured", "Recoil Springs", "5.56 NATO FMJ"]
        },
        unlockLevel: 1
    },
    {
        name: "AK-74",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Blandwell 7x Scope", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip", "Launcher - Standard", "Launcher - Smoke", "Launcher - High Explosive", "Launcher - Drill Charge"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Flip Mag", "Extended Mag III", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "5.45x39mm Overpressured", "Recoil Springs", "5.45x39mm FMJ"]
        },
        unlockLevel: 10
    },
    {
        name: "AMES 85",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Blandwell 7x Scope", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip", "Launcher - Standard", "Launcher - Smoke", "Launcher - High Explosive", "Launcher - Drill Charge"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Flip Mag"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "5.56 NATO Overpressured", "Recoil Springs", "5.56 NATO FMJ"]
        },
        unlockLevel: 19
    },
    {
        name: "GPR 91",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Blandwell 7x Scope", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip", "Launcher - Standard", "Launcher - Smoke", "Launcher - High Explosive", "Launcher - Drill Charge"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Flip Mag"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "5.56 NATO Overpressured", "Recoil Springs", "5.56 NATO FMJ"]
        },
        unlockLevel: 28
    },
    {
        name: "MODEL L",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Blandwell 7x Scope", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip", "Launcher - Standard", "Launcher - Smoke", "Launcher - High Explosive", "Launcher - Drill Charge"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Flip Mag"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "5.56 NATO Overpressured", "Recoil Springs", "5.56 NATO FMJ"]
        },
        unlockLevel: 40
    },
    {
        name: "GOBLIN MK2",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Blandwell 7x Scope", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip", "Launcher - Standard", "Launcher - Smoke", "Launcher - High Explosive", "Launcher - Drill Charge"],
            Magazine: ["Extended Mag I", "Extended Mag II", "Flip Mag", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "7.62 NATO Overpressured", "Recoil Springs", "7.62 NATO FMJ"]
        },
        unlockLevel: 46
    },
    {
        name: "AS VAL",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Blandwell 7x Scope", "SVD Scope", "Otero Thermal 2x"],
            Barrel: ["Suppressed Gain-Twist Barrel", "Suppressed Long Barrel", "Suppressed Reinforced Barrel", "Suppressed CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip", "Launcher - Standard", "Launcher - Smoke", "Launcher - High Explosive", "Launcher - Drill Charge"],
            Magazine: ["Extended Mag I", "Extended Mag II", "Flip Mag", "Extended Mag III"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["No Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock", "Full Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "9x39mm Soviet Overpressured", "Recoil Springs", "9x39mm Soviet FMJ"]
        },
        unlockLevel: 55
    },
    {
        name: "C9",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "R&K Multizoom", "VMF Variable Scope", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip"],
            Magazine: ["Extended Mag I", "Flip Mag", "Extended Mag II", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["No Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "9x19mm Parabellum Overpressured", "Recoil Springs", "9mm Parabellum FMJ"]
        },
        unlockLevel: 1
    },
    {
        name: "KSV",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "R&K Multizoom", "VMF Variable Scope", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip"],
            Magazine: ["Extended Mag I", "Flip Mag", "Extended Mag II", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["No Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "9x39mm Soviet Overpressured", "Recoil Springs", "9x39mm Soviet FMJ"]
        },
        unlockLevel: 7
    },
    {
        name: "TANTO .22",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "R&K Multizoom", "VMF Variable Scope", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip"],
            Magazine: ["Extended Mag I", "Flip Mag", "Extended Mag II", "Fast Mag I"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["No Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", ".22 WMR Overpressured", "Recoil Springs", ".22 WMR FMJ"]
        },
        unlockLevel: 16
    },
    {
        name: "PP-919",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "R&K Multizoom", "VMF Variable Scope", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Fast Mag II", "Fast Mag III"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["No Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "9x18mm Makarov Overpressured", "Recoil Springs", "9x18mm Makarov FMJ"]
        },
        unlockLevel: 37
    },
    {
        name: "Jackal PDW",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "R&K Multizoom", "VMF Variable Scope", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["No Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "9x18mm Makarov Overpressured", "Recoil Springs", "9x18mm Makarov FMJ"]
        },
        unlockLevel: 43
    },
    {
        name: "KOMPAKT 92",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Redwell Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "R&K Multizoom", "VMF Variable Scope", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel", "Integrated Suppressor Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip"],
            Magazine: ["Extended Mag I", "Flip Mag", "Extended Mag II", "Fast Mag I", "Extended Mag III"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["No Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "9x19mm Parabellum Overpressured", "Recoil Springs", "9mm Parabellum FMJ"]
        },
        unlockLevel: 49
    },
    {
        name: "Marine SP",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "K&S Thermal Holo", "Pinpoint Hybrid"],
            Muzzle: ["Suppressor", "Full Choke", "Modified Choke", "Muzzle Brake"],
            Barrel: ["Long Barrel", "Heavy Barrel", "Reinforced Barrel", "Combat Barrel", "Quick Load Barrel"],
            Underbarrel: ["Weighted Foregrip", "Lightweight Foregrip", "Precision Foregrip", "Ranger Foregrip"],
            Stock: ["Infiltrator Stock", "Quickdraw Stock", "Agility Stock", "Ergonomic Stock", "Combat Stock", "Balanced Stock", "Light Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "12 Gauge Slug"]
        },
        unlockLevel: 1
    },
    {
        name: "ASG-89",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "PrismaTech Reflex", "Volzhskiy Reflex", "Dobrych MF Reflex", "Accu-Spot Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "K&S Thermal Holo", "Pinpoint Hybrid"],
            Muzzle: ["Suppressor", "Full Choke", "Modified Choke", "Muzzle Brake"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Precision Foregrip", "Ranger Foregrip"],
            Magazine: ["Extended Mag I", "Extended Mag II", "Fast Mag I", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "12 Gauge Slug", "Recoil Springs"]
        },
        unlockLevel: 31
    },
    {
        name: "PU-21",
        attachments: {
            Optic: ["Kepler Microflex", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Dobrych MF Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Remuda Range Finder", "VMF Variable Scope", "Redwell Custom Zoom", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip", "Crossbar"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "5.45x39mm Overpressured", "Recoil Springs", "5.45x39mm FMJ"]
        },
        unlockLevel: 1
    },
    {
        name: "XMG",
        attachments: {
            Optic: ["Kepler Microflex", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Dobrych MF Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Remuda Range Finder", "VMF Variable Scope", "Redwell Custom Zoom", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip", "Crossbar"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "7.62 NATO Overpressured", "Recoil Springs", "7.62 NATO FMJ"]
        },
        unlockLevel: 13
    },
    {
        name: "GPMG-7",
        attachments: {
            Optic: ["Kepler Microflex", "PrismaTech Reflex", "Volzhskiy Reflex", "Merlin Reflex", "Dobrych MF Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Remuda Range Finder", "VMF Variable Scope", "Redwell Custom Zoom", "Otero Thermal 2x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip", "Crossbar"],
            Magazine: ["Extended Mag I", "Extended Mag II", "Extended Mag III", "Extended Mag IV"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "7.62 NATO Overpressured", "Recoil Springs", "7.62 NATO FMJ"]
        },
        unlockLevel: 52
    },
    {
        name: "SWAT 5.56",
        attachments: {
            Optic: ["Kepler Microflex", "PrismaTech Reflex", "Volzhskiy Reflex", "Redwell Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Remuda Range Finder", "Remuda Dual Zoom", "VMF Variable Scope", "Redwell Custom Zoom", "Otero Thermal 2x", "Thermal 6x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip", "Launcher - Standard", "Launcher - Smoke", "Launcher - High Explosive", "Launcher - Drill Charge"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Flip Mag"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "5.56 NATO Overpressured", "Recoil Springs", "5.56 NATO FMJ"]
        },
        unlockLevel: 1
    },
    {
        name: "Tsarkov 7.62",
        attachments: {
            Optic: ["Kepler Microflex", "PrismaTech Reflex", "Volzhskiy Reflex", "Redwell Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Remuda Range Finder", "Remuda Dual Zoom", "SVD Scope", "VMF Variable Scope", "Redwell Custom Zoom", "Otero Thermal 2x", "Thermal 6x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Weighted Handguard", "Lightweight Handguard", "Marksman Handguard", "Precision Handguard", "Ranger Handguard"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Flip Mag"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "7.62x54mmR Overpressured", "Recoil Springs", "7.62x54mmR FMJ"]
        },
        unlockLevel: 22
    },
    {
        name: "AEK-973",
        attachments: {
            Optic: ["Kepler Microflex", "PrismaTech Reflex", "Volzhskiy Reflex", "Redwell Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Remuda Range Finder", "Remuda Dual Zoom", "VMF Variable Scope", "Redwell Custom Zoom", "Otero Thermal 2x", "Thermal 6x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Vertical Foregrip", "Lightweight Foregrip", "Marksman Foregrip", "Precision Foregrip", "Ranger Foregrip", "Launcher - Standard", "Launcher - Smoke", "Launcher - High Explosive", "Launcher - Drill Charge"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Flip Mag"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "7.62x39mm Overpressured", "Recoil Springs", "7.62x39mm FMJ"]
        },
        unlockLevel: 34
    },
    {
        name: "DM-10",
        attachments: {
            Optic: ["Iron Sight", "Kepler Microflex", "PrismaTech Reflex", "Volzhskiy Reflex", "Redwell Reflex", "K&S Red Dot", "Kepler Red Dot", "Otero Red Dot", "OM3 '92 Holo", "Pinpoint Holoscout", "Accu-Spot Ultra Holo", "Jason Armory 2x", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Remuda Range Finder", "Remuda Dual Zoom", "VMF Variable Scope", "Redwell Custom Zoom", "Otero Thermal 2x", "Thermal 6x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Weighted Handguard", "Lightweight Handguard", "Marksman Handguard", "Precision Handguard", "Ranger Handguard"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Flip Mag", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "7.62 NATO Overpressured", "Recoil Springs", "7.62 NATO FMJ"]
        },
        unlockLevel: 43
    },
    {
        name: "LW3A1 Frostline",
        attachments: {
            Optic: ["Iron Sight", "Kepler Microflex", "PrismaTech Reflex", "Redwell Reflex", "K&S Red Dot", "Kepler Red Dot", "OM3 '92 Holo", "Accu-Spot Ultra Holo", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Remuda Range Finder", "Remuda Dual Zoom", "VMF Variable Scope", "Redwell Custom Zoom", "Otero Thermal 2x", "Thermal 6x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            "Stock Pad": ["Weighted Pad", "Lightweight Pad", "Marksman Pad", "Precision Pad", "Ranger Pad"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II"],
            Comb: ["Quickdraw Riser", "Combat Riser", "Commando Riser", "Ergonomic Riser", "CQB Riser"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "7.62 NATO Overpressured", "7.62 NATO FMJ"]
        },
        unlockLevel: 1
    },
    {
        name: "SVD",
        attachments: {
            Optic: ["Iron Sight", "Kepler Microflex", "PrismaTech Reflex", "Redwell Reflex", "K&S Red Dot", "Kepler Red Dot", "OM3 '92 Holo", "Accu-Spot Ultra Holo", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Remuda Range Finder", "Remuda Dual Zoom", "VMF Variable Scope", "Redwell Custom Zoom", "Otero Thermal 2x", "Thermal 6x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Weighted Handguard", "Lightweight Handguard", "Marksman Handguard", "Precision Handguard", "Ranger Handguard"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Fast Mag II"],
            Comb: ["Quickdraw Riser", "Combat Riser", "Commando Riser", "Ergonomic Riser", "CQB Riser"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "7.62x54mmR Overpressured", "Recoil Springs", "7.62x54mmR FMJ"]
        },
        unlockLevel: 25
    },
    {
        name: "LR 7.62",
        attachments: {
            Optic: ["Iron Sight", "Kepler Microflex", "PrismaTech Reflex", "Redwell Reflex", "K&S Red Dot", "Kepler Red Dot", "OM3 '92 Holo", "Accu-Spot Ultra Holo", "Willis 3x", "PrismaTech 4x", "Dobrych 4x", "K&S Thermal Holo", "Pinpoint Hybrid", "PrismaPoint Hybrid", "R&K Multizoom", "Remuda Range Finder", "Remuda Dual Zoom", "VMF Variable Scope", "Redwell Custom Zoom", "Otero Thermal 2x", "Thermal 6x"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Underbarrel: ["Weighted Handguard", "Lightweight Handguard", "Marksman Handguard", "Precision Handguard", "Ranger Handguard"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Light Stock", "Infiltrator Stock", "Heavy Stock", "Balanced Stock", "Combat Stock"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "7.62 NATO Overpressured", "7.62 NATO FMJ"]
        },
        unlockLevel: 49
    }
];

// Secondary Weapons
const secondaryWeapons = [
    {
        name: "9mm PM",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "Accu-Spot Reflex", "Kepler Pistol Scope"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Akimbo 9mm PM"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "9x18mm Makarov Overpressured", "Recoil Springs", "9x18mm Makarov FMJ"]
        },
        unlockLevel: 1
    },
    {
        name: "Grekhova",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "Accu-Spot Reflex", "Kepler Pistol Scope"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Extended Mag III"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Weighted Stock", "Akimbo Grekhova"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", "9x18mm Makarov Overpressured", "Recoil Springs", "9x18mm Makarov FMJ"]
        },
        unlockLevel: 13
    },
    {
        name: "GS45",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "Accu-Spot Reflex", "Kepler Pistol Scope"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Akimbo GS45"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", ".45 ACP Overpressured", "Recoil Springs", ".45 ACP FMJ"]
        },
        unlockLevel: 28
    },
    {
        name: "Stryder .22",
        attachments: {
            Optic: ["Remuda Mini Reflex", "Otero Micro Dot", "Kepler Microflex", "Merlin Mini", "Accu-Spot Reflex", "Kepler Pistol Scope"],
            Muzzle: ["Suppressor", "Compensator", "Muzzle Brake", "Ported Compensator"],
            Barrel: ["Gain-Twist Barrel", "Long Barrel", "Reinforced Barrel", "Short Barrel", "CHF Barrel"],
            Magazine: ["Extended Mag I", "Fast Mag I", "Extended Mag II", "Fast Mag II"],
            "Rear Grip": ["Quickdraw Grip", "Assault Grip", "Commando Grip", "Ergonomic Grip", "CQB Grip"],
            Stock: ["Akimbo Stryder .22"],
            Laser: ["Steady Aim Laser", "Fast Motion Laser", "Tactical Laser", "Strelok Laser", "Target Laser"],
            "Fire Mods": ["Rapid Fire", ".22 WMR Overpressured", "Recoil Springs", ".22 WMR FMJ"]
        },
        unlockLevel: 40
    },
    { name: "CIGMA 2B", unlockLevel: 1 },
    { name: "HE-1", unlockLevel: 19 }
];

// Melee Weapons
const meleeWeapons = [
    { name: "Knife", unlockLevel: 1 },
    { name: "Baseball Bat", unlockLevel: 52 }
];

// Wildcards
const wildcards = [
    { name: "Tactical Expert", unlockLevel: 15 },
    { name: "Overkill", unlockLevel: 24 },
    { name: "Gunfighter", unlockLevel: 33 },
    { name: "Danger Close", unlockLevel: 38 },
    { name: "Prepper", unlockLevel: 45 },
    { name: "Perk Greed", unlockLevel: 54 }
];

// Lethal Equipment
const lethalEquipment = [
    { name: "Frag Grenade", unlockLevel: 1 },
    { name: "Semtex", unlockLevel: 9 },
    { name: "C4", unlockLevel: 14 },
    { name: "Thermo Grenade", unlockLevel: 21 },
    { name: "Impact Grenade", unlockLevel: 26 },
    { name: "Molotov", unlockLevel: 32 },
    { name: "Blast Trap", unlockLevel: 41 },
    { name: "Drill Charge", unlockLevel: 50 },
    { name: "Combat Axe", unlockLevel: 53 }
];

// Tactical Equipment
const tacticalEquipment = [
    { name: "Concussion", unlockLevel: 1 },
    { name: "Flashbang", unlockLevel: 6 },
    { name: "Spy Cam", unlockLevel: 12 },
    { name: "Smoke", unlockLevel: 17 },
    { name: "Prox Alarm", unlockLevel: 23 },
    { name: "Stim Shot", unlockLevel: 30 },
    { name: "Decoy", unlockLevel: 35 },
    { name: "Shock Charge", unlockLevel: 42 }
];

// Field Upgrades
const fieldUpgrades = [
    { name: "Assault Pack", unlockLevel: 1 },
    { name: "Spring Mine", unlockLevel: 1 },
    { name: "Trophy System", unlockLevel: 12 },
    { name: "Scrambler", unlockLevel: 18 },
    { name: "Signal Lure", unlockLevel: 27 },
    { name: "War Cry", unlockLevel: 35 },
    { name: "Tactical Insertion", unlockLevel: 39 },
    { name: "Acoustic Amp", unlockLevel: 41 },
    { name: "Morphine Injector", unlockLevel: 44 },
    { name: "Neurogas", unlockLevel: 48 },
    { name: "Sleeper Agent", unlockLevel: 51 }
];

// Perks for each slot
const perks1 = [
    { name: "Gung-Ho", unlockLevel: 1 },
    { name: "Dexterity", unlockLevel: 20 },
    { name: "Scavenger", unlockLevel: 26 },
    { name: "Ghost", unlockLevel: 17 },
    { name: "Ninja", unlockLevel: 35 },
    { name: "Flak Jacket", unlockLevel: 8 },
    { name: "Tac Mask", unlockLevel: 44 }
];

const perks2 = [
    { name: "Assassin", unlockLevel: 5 },
    { name: "Bruiser", unlockLevel: 53 },
    { name: "Engineer", unlockLevel: 1 },
    { name: "Tracker", unlockLevel: 29 },
    { name: "Forward Intel", unlockLevel: 47 },
    { name: "Dispatcher", unlockLevel: 11 },
    { name: "Fast Hands", unlockLevel: 38 }
];

const perks3 = [
    { name: "Double Time", unlockLevel: 14 },
    { name: "Bankroll", unlockLevel: 23 },
    { name: "Vigilance", unlockLevel: 6 },
    { name: "Cold-Blooded", unlockLevel: 41 },
    { name: "Quartermaster", unlockLevel: 1 },
    { name: "Guardian", unlockLevel: 32 },
    { name: "Gearhead", unlockLevel: 50 }
];

// Scorestreaks
const scorestreaks = [
    { name: "Scout Pulse", unlockLevel: 1 },
    { name: "RC-XD", unlockLevel: 5 },
    { name: "SAM Turret", unlockLevel: 33 },
    { name: "UAV", unlockLevel: 15 },
    { name: "Archangel Launcher", unlockLevel: 1 },
    { name: "Counter UAV", unlockLevel: 17 },
    { name: "Care Package", unlockLevel: 24 },
    { name: "Napalm Strike", unlockLevel: 30 },
    { name: "LDBR", unlockLevel: 21 },
    { name: "Sentry Turret", unlockLevel: 12 },
    { name: "Hellstorm", unlockLevel: 9 },
    { name: "Watchdog Helo", unlockLevel: 1 },
    { name: "Interceptors", unlockLevel: 47 },
    { name: "A.G.R. Mk 1", unlockLevel: 27 },
    { name: "Strategic Bomber", unlockLevel: 36 },
    { name: "HARP", unlockLevel: 42 },
    { name: "Chopper Gunner", unlockLevel: 45 },
    { name: "Dreadnought", unlockLevel: 54 }
]

// Helper Functions
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomItems(array, numItems) {
    let items = [];
    let tempArray = [...array]; // Clone the array
    for (let i = 0; i < numItems && tempArray.length > 0; i++) {
        const index = Math.floor(Math.random() * tempArray.length);
        items.push(tempArray.splice(index, 1)[0]);
    }
    return items;
}

function selectAttachments(weapon, attachmentCount) {
    const categories = Object.keys(weapon.attachments);
    let selectedAttachments = [];
    let availableCategories = [...categories];

    // Shuffle the categories to ensure randomness
    availableCategories.sort(() => 0.5 - Math.random());

    for (let i = 0; i < attachmentCount && availableCategories.length > 0; i++) {
        // Select a random category
        const category = availableCategories.pop();
        // Select a random attachment from that category
        const attachmentsInCategory = weapon.attachments[category];
        const attachment = getRandomItem(attachmentsInCategory);
        selectedAttachments.push(`${category}: ${attachment}`);
    }

    return selectedAttachments;
}

function selectSecondaryAttachments(weapon, attachmentCount) {
    let categories = Object.keys(weapon.attachments);
    let selectedAttachments = {};
    let availableCategories = [...categories];

    let akimboSelected = false;

    // Keep selecting attachments until we have the required number or run out of categories
    while (Object.keys(selectedAttachments).length < attachmentCount && availableCategories.length > 0) {
        // Randomly select a category
        const randomIndex = Math.floor(Math.random() * availableCategories.length);
        const category = availableCategories[randomIndex];

        // If 'Optic' category and 'Akimbo' is selected, skip 'Optic'
        if (category === 'Optic' && akimboSelected) {
            // Remove 'Optic' from availableCategories
            availableCategories.splice(randomIndex, 1);
            continue;
        }

        // Select a random attachment from the category
        const attachmentsInCategory = weapon.attachments[category];
        const attachment = getRandomItem(attachmentsInCategory);

        // Add the attachment to selectedAttachments
        selectedAttachments[category] = attachment;

        // If 'Stock' and 'Akimbo' is selected, set akimboSelected to true
        if (category === 'Stock' && attachment.includes('Akimbo')) {
            akimboSelected = true;

            // If 'Optic' is already selected, remove it
            if (selectedAttachments['Optic']) {
                delete selectedAttachments['Optic'];
            }

            // Remove 'Optic' from availableCategories
            const opticIndex = availableCategories.indexOf('Optic');
            if (opticIndex !== -1) {
                availableCategories.splice(opticIndex, 1);
            }
        }

        // Remove the category from availableCategories
        availableCategories.splice(randomIndex, 1);
    }

    // Convert selectedAttachments to an array of strings
    let attachmentList = [];
    for (let category in selectedAttachments) {
        attachmentList.push(`${category}: ${selectedAttachments[category]}`);
    }

    return attachmentList;
}


// Event Listeners and DOM Manipulation
document.getElementById('settingsBtn').addEventListener('click', function() {
    const settingsMenu = document.getElementById('advancedSettings');
    settingsMenu.classList.toggle('hidden');
});

document.getElementById('considerPlayerLevel').addEventListener('change', function() {
    const playerLevelFields = document.getElementById('playerLevelFields');
    if (this.checked) {
        playerLevelFields.classList.remove('hidden');
    } else {
        playerLevelFields.classList.add('hidden');
    }
});

// Show/Hide Permanent Unlocks Field
document.getElementById('considerPermanentUnlocks').addEventListener('change', function() {
    const permanentUnlocksField = document.getElementById('permanentUnlocksField');
    if (this.checked) {
        permanentUnlocksField.classList.remove('hidden');
    } else {
        permanentUnlocksField.classList.add('hidden');
    }
});

// Main Function to Generate Class
function generateClass() {
    // Get Advanced Settings
    const includeScorestreaks = document.getElementById('includeScorestreaks').checked;
    const considerPlayerLevel = document.getElementById('considerPlayerLevel').checked;
    const considerPermanentUnlocks = document.getElementById('considerPermanentUnlocks').checked;

    let prestigeLevel = 0;
    let playerLevel = 1;
    let permanentUnlocks = [];

    if (considerPlayerLevel) {
        prestigeLevel = parseInt(document.getElementById('prestigeLevel').value) || 0;
        playerLevel = parseInt(document.getElementById('playerLevel').value) || 1;
    }

    if (considerPermanentUnlocks) {
        const unlocksInput = document.getElementById('permanentUnlocks').value;
        if (unlocksInput.trim() !== "") {
            permanentUnlocks = unlocksInput.split(',').map(item => item.trim());
        }
    }

    // Initialize available items
    let availablePrimaryWeapons = primaryWeapons;
    let availableWildcards = wildcards;
    let availableSecondaryWeapons = secondaryWeapons;
    let availableMeleeWeapons = meleeWeapons;
    let availableTacticalEquipment = tacticalEquipment;
    let availableLethalEquipment = lethalEquipment;
    let availableFieldUpgrades = fieldUpgrades;
    let availablePerks1 = perks1;
    let availablePerks2 = perks2;
    let availablePerks3 = perks3;
    let availableScorestreaks = scorestreaks;

    // Filter items based on player level and permanent unlocks
    if (considerPlayerLevel) {
        const filterByLevel = (item) => {
            return (
                item.unlockLevel <= playerLevel ||
                (considerPermanentUnlocks && permanentUnlocks.includes(item.name))
            );
        };
        availablePrimaryWeapons = availablePrimaryWeapons.filter(filterByLevel)
        availableWildcards = availableWildcards.filter(filterByLevel)
        availableSecondaryWeapons = availableSecondaryWeapons.filter(filterByLevel)
        availableMeleeWeapons = availableMeleeWeapons.filter(filterByLevel)
        availableTacticalEquipment = availableTacticalEquipment.filter(filterByLevel)
        availableLethalEquipment = availableLethalEquipment.filter(filterByLevel)
        availableFieldUpgrades = availableFieldUpgrades.filter(filterByLevel)
        availablePerks1 = availablePerks1.filter(filterByLevel)
        availablePerks2 = availablePerks2.filter(filterByLevel)
        availablePerks3 = availablePerks3.filter(filterByLevel)
        availableScorestreaks = availableScorestreaks.filter(filterByLevel)
    }

    // Check for empty arrays after filtering
    if (
        availablePrimaryWeapons.length === 0 ||
        availableSecondaryWeapons.length === 0 ||
        availableMeleeWeapons.length === 0 ||
        availableLethalEquipment.length === 0 ||
        availableTacticalEquipment.length === 0 ||
        availableFieldUpgrades.length === 0 ||
        availablePerks1.length === 0 ||
        availablePerks2.length === 0 ||
        availablePerks3.length === 0 ||
        (includeScorestreaks && availableScorestreaks.length === 0)
    ) {
        alert("Not enough items available at your current level to generate a loadout with the given settings.");
        return;
    }

    // Select items
    const primaryWeapon = getRandomItem(availablePrimaryWeapons);
    
    let wildcard;
    if (availableWildcards.length === 0) {
        wildcard = { name: "None" };
    } else {
        wildcard = getRandomItem(availableWildcards);
    }

    // Set defaults
    let attachmentCount = 5;
    let secondaryWeaponOptions = availableSecondaryWeapons;
    let fieldUpgradeCount = 1;
    let extraPerk = null;

    // Apply wildcard effects
    switch (wildcard.name) {
        case "Gunfighter":
            attachmentCount = 8;
            break;
        case "Perk Greed":
            // Will select extra perk later
            break;
        case "Overkill":
            // Include primary weapons as secondary options
            secondaryWeaponOptions = availablePrimaryWeapons.filter(
                weapon => weapon.name !== primaryWeapon.name
            );
            break;
        case "Prepper":
            fieldUpgradeCount = 2;
            break;
        case "None":
            break;
        default:
            break;
    }

    // Select attachments for primary weapon
    const maxAttachments = Math.min(attachmentCount, Object.keys(primaryWeapon.attachments).length);
    const primaryAttachments = selectAttachments(primaryWeapon, maxAttachments);

    // Select secondary weapon
    const secondaryWeapon = getRandomItem(secondaryWeaponOptions);

    let secondaryWeaponName = secondaryWeapon.name;
    let secondaryAttachments = [];

    if (secondaryWeapon.attachments) {
        const maxSecondaryAttachments = Math.min(
            5,
            Object.keys(secondaryWeapon.attachments).length
        );
        if (wildcard.name === "Overkill") {
            secondaryAttachments = selectAttachments(secondaryWeapon, maxSecondaryAttachments)
        } else {
            secondaryAttachments = selectSecondaryAttachments(secondaryWeapon, maxSecondaryAttachments);
        }
    }

    // Select a melee weapon
    const meleeWeapon = getRandomItem(availableMeleeWeapons)

    // Select lethal and tactical equipment
    const lethal = getRandomItem(availableLethalEquipment);
    const tactical = getRandomItem(availableTacticalEquipment);

    // Select field upgrades
    const selectedFieldUpgrades = getRandomItems(availableFieldUpgrades, fieldUpgradeCount).map(
        (item) => item.name
    );

    // Select perks
    const perk1 = getRandomItem(availablePerks1);
    const perk2 = getRandomItem(availablePerks2);
    const perk3 = getRandomItem(availablePerks3);

    // If wildcard is Perk Greed, select an extra perk not already selected
    if (wildcard.name === "Perk Greed") {
        const allPerks = [...perks1, ...perks2, ...perks3]
        const selectedPerkNames = [perk1.name, perk2.name, perk3.name];
        const availablePerks = allPerks.filter(
            (perk) => !selectedPerkNames.includes(perk.name)
        );
        if (availablePerks.length > 0) {
            extraPerk = getRandomItem(availablePerks);
        }
    }

    // Select scorestreaks if applicable
    let selectedScorestreaks = [];
    if (includeScorestreaks) {
        selectedScorestreaks = getRandomItems(availableScorestreaks, 3).map(
            (item) => item.name
        );
    }

    // Display the generated class
    const classDisplay = document.getElementById('classDisplay');
    classDisplay.innerHTML = `
        <div class="loadout-item"><strong>Primary Weapon:</strong> ${primaryWeapon.name}</div>
        <div class="loadout-item"><strong>Attachments (${primaryAttachments.length}):</strong><br>${primaryAttachments.join('<br>')}</div>
        <div class="loadout-item"><strong>Secondary Weapon:</strong> ${secondaryWeaponName}</div>
        ${secondaryAttachments.length > 0 ? `<div class="loadout-item"><strong>Secondary Attachments (${secondaryAttachments.length}):</strong><br>${secondaryAttachments.join('<br>')}</div>` : ''}
        <div class="loadout-item"><strong>Melee Weapon:</strong> ${meleeWeapon.name}</div>
        <div class="loadout-item"><strong>Tactical Equipment:</strong> ${tactical.name}</div>
        <div class="loadout-item"><strong>Lethal Equipment:</strong> ${lethal.name}</div>
        <div class="loadout-item"><strong>Field Upgrade${fieldUpgradeCount > 1 ? 's' : ''}:</strong> ${selectedFieldUpgrades.join(', ')}</div>
        <div class="loadout-item"><strong>Perk 1:</strong> ${perk1.name}</div>
        <div class="loadout-item"><strong>Perk 2:</strong> ${perk2.name}</div>
        <div class="loadout-item"><strong>Perk 3:</strong> ${perk3.name}</div>
        ${extraPerk ? `<div class="loadout-item"><strong>Extra Perk:</strong> ${extraPerk.name}</div>` : ''}
        <div class="loadout-item"><strong>Wildcard:</strong> ${wildcard.name}</div>
        ${includeScorestreaks ? `<div class="loadout-item"><strong> Scorestreaks:</strong> ${selectedScorestreaks.join(', ')}</div>` : ''}
    `;
    classDisplay.style.display = 'block';
}

document.getElementById('generateBtn').addEventListener('click', generateClass);