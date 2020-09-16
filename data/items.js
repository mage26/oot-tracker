export default  [
 	{
 		id:    "item.bow",
        max: 3,
        images: "/images/items/bow.png",
        counting: [
            "",
            "30",
            "40",
            "50"
        ],
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.hookshot",
        max: 2,
        mark: false,
        images: [
            "/images/items/hookshot_small.png",
            "/images/items/hookshot_small.png",
            "/images/items/hookshot_long.png"
        ],
        counting: [
            "",
            "H",
            "L"
        ],
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.hammer",
        max: 1,
        images: "/images/items/hammer.png"
    },
    {
    	id: "item.stick",
        max: 3,
        images: "/images/items/stick.png",
        counting: [
            "",
            "10",
            "20",
            "30"
        ],
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.nut",
        max: 3,
        images: "/images/items/nut.png",
        counting: [
            "",
            "20",
            "30",
            "40"
        ],
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.slingshot",
        max: 3,
        images: "/images/items/slingshot.png",
        counting: [
            "",
            "30",
            "40",
            "50"
        ],
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.boomerang",
        max: 1,
        images: "/images/items/boomerang.png"
    },
    {
    	id: "item.bombs",
        max: 3,
        images: "/images/items/bombs.png",
        counting: [
            "",
            "20",
            "30",
            "40"
        ],
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.bombchu",
        max: 1,
        images: "/images/items/bombchu.png"
    },
    {
    	id: "item.lens",
        max: 1,
        images: "/images/items/lens.png"
    },
    {
    	id: "item.magic_din",
        max: 1,
        images: "/images/items/magic_din.png"
    },
    {
    	id: "item.magic_farore",
        max: 1,
        images: "/images/items/magic_farore.png"
    },
    {
    	id: "item.magic_nayru",
        max: 1,
        images: "/images/items/magic_nayru.png"
    },
    {
    	id: "item.arrow_fire",
        max: 1,
        images: "/images/items/arrow_fire.png"
    },
    {
    	id: "item.arrow_ice",
        max: 1,
        images: "/images/items/arrow_ice.png"
    },
    {
    	id: "item.arrow_light",
        max: 1,
        images: "/images/items/arrow_light.png"
    },
    {
    	id: "item.ice_trap",
        max: false,
        images: "/images/items/ice_trap.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.triforce_piece",
        max: false,
        images: "/images/items/triforce_piece.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.arrows",
        max: 3,
        images: [
            "/images/items/arrow_none.png",
            "/images/items/arrow_fire.png",
            "/images/items/arrow_light.png",
            "/images/items/arrow_both.png"
        ],
        affect: [{
                arrow_fire: 0,
                arrow_light: 0
            },
            {
                arrow_fire: 1,
                arrow_light: 0
            },
            {
                arrow_fire: 0,
                arrow_light: 1
            },
            {
                arrow_fire: 1,
                arrow_light: 1
            }
        ]
    },
    {
    	id: "item.ocarina",
        max: 2,
        images: [
            "/images/items/ocarina_saria.png",
            "/images/items/ocarina_saria.png",
            "/images/items/ocarina_time.png"
        ]
    },
    {
    	id: "item.bottle",
        max: 4,
        counting: true,
        images: "/images/items/bottle.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.wallet",
        max: 3,
        mark: 2,
        images: [
            "/images/items/wallet_default.png",
            "/images/items/wallet_silver.png",
            "/images/items/wallet_gold.png",
            "/images/items/wallet_gold.png"
        ],
        counting: [
            "99",
            "200",
            "500",
            "999"
        ],
        always_active: true,
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.bean",
        max: 10,
        counting: true,
        images: "/images/items/bean.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.skulltula",
        max: 100,
        mark: 50,
        counting: true,
        alternate_counting: [
            0,
            10,
            20,
            30,
            40,
            50,
            100
        ],
        images: "/images/items/skulltula.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.egg",
        max: 8,
        images: [
            "/images/items/egg.png",
            "/images/items/egg.png",
            "/images/items/cucco.png",
            "/images/items/zelda_letter.png",
            "/images/items/mask_keaton.png",
            "/images/items/mask_skull.png",
            "/images/items/mask_spooky.png",
            "/images/items/mask_bunny.png",
            "/images/items/mask_truth.png"
        ]
    },
    {
    	id: "item.cojiro",
        max: 11,
        start_settings: "option.trade_sequence_start_item",
        images: [
            "/images/items/egg_cojiro.png",
            "/images/items/egg_cojiro.png",
            "/images/items/cucco.png",
            "/images/items/cojiro.png",
            "/images/items/mushroom.png",
            "/images/items/medicine.png",
            "/images/items/saw.png",
            "/images/items/broken_sword.png",
            "/images/items/prescription.png",
            "/images/items/frog.png",
            "/images/items/eyedrops.png",
            "/images/items/claim.png"
        ]
    },
    {
    	id: "item.sword_kokiri",
        max: 1,
        images: "/images/items/sword_kokiri.png"
    },
    {
    	id: "item.sword_master",
        max: 1,
        images: "/images/items/sword_master.png",
        blacklist_shop: true
    },
    {
    	id: "item.sword_biggoron",
        max: 1,
        images: "/images/items/sword_biggoron.png"
    },
    {
    	id: "item.shield_kokiri",
        max: 1,
        images: "/images/items/shield_kokiri.png"
    },
    {
    	id: "item.shield_hylia",
        max: 1,
        images: "/images/items/shield_hylia.png"
    },
    {
    	id: "item.shield_mirror",
        max: 1,
        images: "/images/items/shield_mirror.png"
    },
    {
    	id: "item.tunic_forest",
        max: 0,
        images: "/images/items/tunic_forest.png",
        always_active: true,
        blacklist_shop: true
    },
    {
    	id: "item.tunic_fire",
        max: 1,
        images: "/images/items/tunic_fire.png"
    },
    {
    	id: "item.tunic_water",
        max: 1,
        images: "/images/items/tunic_water.png"
    },
    {
    	id: "item.tunics",
        max: 3,
        images: [
            "/images/items/tunic_forest.png",
            "/images/items/tunic_fire.png",
            "/images/items/tunic_water.png",
            "/images/items/tunic_both.png"
        ],
        affect: [{
                tunic_fire: 0,
                tunic_water: 0
            },
            {
                tunic_fire: 1,
                tunic_water: 0
            },
            {
                tunic_fire: 0,
                tunic_water: 1
            },
            {
                tunic_fire: 1,
                tunic_water: 1
            }
        ]
    },
    {
    	id: "item.boots_normal",
        max: 0,
        images: "/images/items/boots_normal.png",
        always_active: true,
        blacklist_shop: true
    },
    {
    	id: "item.boots_iron",
        max: 1,
        images: "/images/items/boots_iron.png"
    },
    {
    	id: "item.boots_hover",
        max: 1,
        images: "/images/items/boots_hover.png"
    },
    {
    	id: "item.boots",
        max: 3,
        images: [
            "/images/items/boots_normal.png",
            "/images/items/boots_iron.png",
            "/images/items/boots_hover.png",
            "/images/items/boots_both.png"
        ],
        affect: [{
                boots_iron: false,
                boots_hover: false
            },
            {
                boots_iron: true,
                boots_hover: false
            },
            {
                boots_iron: false,
                boots_hover: true
            },
            {
                boots_iron: true,
                boots_hover: true
            }
        ]
    },
    {
    	id: "item.glove",
        max: 3,
        mark: false,
        images: [
            "/images/items/glove_goron.png",
            "/images/items/glove_goron.png",
            "/images/items/glove_silver.png",
            "/images/items/glove_gold.png"
        ],
        counting: [
            "",
            "",
            "S",
            "G"
        ],
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.scale",
        max: 2,
        mark: false,
        images: [
            "/images/items/scale_silver.png",
            "/images/items/scale_silver.png",
            "/images/items/scale_gold.png"
        ],
        counting: [
            "",
            "S",
            "G"
        ],
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.stone_of_agony",
        max: 1,
        images: "/images/items/stoneofagony.png"
    },
    {
    	id: "item.magic_power",
        max: 2,
        mark: false,
        images: [
            "/images/items/magic_power_small.png",
            "/images/items/magic_power_small.png",
            "/images/items/magic_power_big.png"
        ],
        counting: [
            "",
            "",
            "+"
        ],
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.zora_letter",
        max: 1,
        images: "/images/items/zora_letter.png"
    },
    {
    	id: "item.membership",
        max: 1,
        images: "/images/items/membership.png"
    },
    {
    	id: "item.song_zelda",
        max: 1,
        images: "/images/items/song_zelda.png"
    },
    {
    	id: "item.song_epona",
        max: 1,
        images: "/images/items/song_epona.png"
    },
    {
    	id: "item.song_sun",
        max: 1,
        images: "/images/items/song_sun.png"
    },
    {
    	id: "item.song_saria",
        max: 1,
        images: "/images/items/song_saria.png"
    },
    {
    	id: "item.song_time",
        max: 1,
        images: "/images/items/song_time.png"
    },
    {
    	id: "item.song_storm",
        max: 1,
        images: "/images/items/song_storm.png"
    },
    {
    	id: "item.warp_forest",
        max: 1,
        images: "/images/items/warp_forest.png"
    },
    {
    	id: "item.warp_fire",
        max: 1,
        images: "/images/items/warp_fire.png"
    },
    {
    	id: "item.warp_water",
        max: 1,
        images: "/images/items/warp_water.png"
    },
    {
    	id: "item.warp_shadow",
        max: 1,
        images: "/images/items/warp_shadow.png"
    },
    {
    	id: "item.warp_spirit",
        max: 1,
        images: "/images/items/warp_spirit.png"
    },
    {
    	id: "item.warp_light",
        max: 1,
        images: "/images/items/warp_light.png"
    },
    {
    	id: "item.stone_forest",
        max: 1,
        images: "/images/items/stone_forest.png",
        dungeon_reward: true,
        blacklist_shop: true,
        valign: "end"
    },
    {
    	id: "item.stone_fire",
        max: 1,
        images: "/images/items/stone_fire.png",
        dungeon_reward: true,
        blacklist_shop: true,
        valign: "end"
    },
    {
    	id: "item.stone_water",
        max: 1,
        images: "/images/items/stone_water.png",
        dungeon_reward: true,
        blacklist_shop: true,
        valign: "end"
    },
    {
    	id: "item.medallion_forest",
        max: 1,
        images: "/images/items/medallion_forest.png",
        dungeon_reward: true,
        blacklist_shop: true,
        valign: "end"
    },
    {
    	id: "item.medallion_fire",
        max: 1,
        images: "/images/items/medallion_fire.png",
        dungeon_reward: true,
        blacklist_shop: true,
        valign: "end"
    },
    {
    	id: "item.medallion_water",
        max: 1,
        images: "/images/items/medallion_water.png",
        dungeon_reward: true,
        blacklist_shop: true,
        valign: "end"
    },
    {
    	id: "item.medallion_spirit",
        max: 1,
        images: "/images/items/medallion_spirit.png",
        dungeon_reward: true,
        blacklist_shop: true,
        valign: "end"
    },
    {
    	id: "item.medallion_shadow",
        max: 1,
        images: "/images/items/medallion_shadow.png",
        dungeon_reward: true,
        blacklist_shop: true,
        valign: "end"
    },
    {
    	id: "item.medallion_light",
        max: 1,
        images: "/images/items/medallion_light.png",
        dungeon_reward: true,
        blacklist_shop: true,
        valign: "end"
    },
    {
    	id: "item.key_small_forest",
        max: 5,
        maxmq: 6,
        related_dungeon: "temple_forest",
        counting: true,
        images: "/images/items/key_small.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.key_boss_forest",
        max: 1,
        related_dungeon: "temple_forest",
        images: "/images/items/key_boss.png"
    },
    {
    	id: "item.key_small_fire",
        max: 8,
        maxmq: 5,
        related_dungeon: "temple_fire",
        counting: true,
        images: "/images/items/key_small.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.key_boss_fire",
        max: 1,
        related_dungeon: "temple_fire",
        images: "/images/items/key_boss.png"
    },
    {
    	id: "item.key_small_water",
        max: 6,
        maxmq: 2,
        related_dungeon: "temple_water",
        counting: true,
        images: "/images/items/key_small.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.key_boss_water",
        max: 1,
        related_dungeon: "temple_water",
        images: "/images/items/key_boss.png"
    },
    {
    	id: "item.key_small_shadow",
        max: 5,
        maxmq: 6,
        related_dungeon: "temple_shadow",
        counting: true,
        images: "/images/items/key_small.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.key_boss_shadow",
        max: 1,
        related_dungeon: "temple_shadow",
        images: "/images/items/key_boss.png"
    },
    {
    	id: "item.key_small_spirit",
        max: 5,
        maxmq: 7,
        related_dungeon: "temple_spirit",
        counting: true,
        images: "/images/items/key_small.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.key_boss_spirit",
        max: 1,
        related_dungeon: "temple_spirit",
        images: "/images/items/key_boss.png"
    },
    {
    	id: "item.key_small_ganon",
        max: 2,
        maxmq: 3,
        related_dungeon: "castle_ganon",
        counting: true,
        images: "/images/items/key_small.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.key_boss_ganon",
        max: 1,
        related_dungeon: "castle_ganon",
        images: "/images/items/key_boss.png"
    },
    {
    	id: "item.key_small_gerudo",
        max: 4,
        counting: true,
        images: "/images/items/key_small.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.key_small_training",
        max: 9,
        maxmq: 3,
        related_dungeon: "gerudo_training",
        counting: true,
        images: "/images/items/key_small.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.key_small_well",
        max: 3,
        maxmq: 2,
        related_dungeon: "well",
        counting: true,
        images: "/images/items/key_small.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.compass_deku",
        max: 1,
        images: "/images/items/compass.png"
    },
    {
    	id: "item.dungeon_map_deku",
        max: 1,
        images: "/images/items/dungeon_map.png"
    },
    {
    	id: "item.compass_dodongo",
        max: 1,
        images: "/images/items/compass.png"
    },
    {
    	id: "item.dungeon_map_dodongo",
        max: 1,
        images: "/images/items/dungeon_map.png"
    },
    {
    	id: "item.compass_jabujabu",
        max: 1,
        images: "/images/items/compass.png"
    },
    {
    	id: "item.dungeon_map_jabujabu",
        max: 1,
        images: "/images/items/dungeon_map.png"
    },
    {
    	id: "item.compass_temple_forest",
        max: 1,
        images: "/images/items/compass.png"
    },
    {
    	id: "item.dungeon_map_temple_forest",
        max: 1,
        images: "/images/items/dungeon_map.png"
    },
    {
    	id: "item.compass_temple_fire",
        max: 1,
        images: "/images/items/compass.png"
    },
    {
    	id: "item.dungeon_map_temple_fire",
        max: 1,
        images: "/images/items/dungeon_map.png"
    },
    {
    	id: "item.compass_temple_water",
        max: 1,
        images: "/images/items/compass.png"
    },
    {
    	id: "item.dungeon_map_temple_water",
        max: 1,
        images: "/images/items/dungeon_map.png"
    },
    {
    	id: "item.compass_temple_shadow",
        max: 1,
        images: "/images/items/compass.png"
    },
    {
    	id: "item.dungeon_map_temple_shadow",
        max: 1,
        images: "/images/items/dungeon_map.png"
    },
    {
    	id: "item.compass_temple_spirit",
        max: 1,
        images: "/images/items/compass.png"
    },
    {
    	id: "item.dungeon_map_temple_spirit",
        max: 1,
        images: "/images/items/dungeon_map.png"
    },
    {
    	id: "item.compass_well",
        max: 1,
        images: "/images/items/compass.png"
    },
    {
    	id: "item.dungeon_map_well",
        max: 1,
        images: "/images/items/dungeon_map.png"
    },
    {
    	id: "item.compass_ice",
        max: 1,
        images: "/images/items/compass.png"
    },
    {
    	id: "item.dungeon_map_ice",
        max: 1,
        images: "/images/items/dungeon_map.png"
    },
    {
    	id: "item.heart_piece",
        max: 36,
        counting: true,
        images: "/images/items/heart_piece.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.heart_container",
        max: 8,
        counting: true,
        images: "/images/items/heart_container.png",
        halign: "end",
        valign: "end"
    },
    {
    	id: "item.heart_double",
        max: 1,
        images: "/images/items/heart_double.png"
    },
    {
    	id: "item.sold_out",
        max: 0,
        images: "/images/items/sold_out.png",
        always_active: true
    },
    {
    	id: "item.blue_fire",
        max: 0,
        images: "/images/items/bottle_blue_fire.png",
        always_active: true
    },
    {
    	id: "item.bugs",
        max: 0,
        images: "/images/items/bottle_bugs.png",
        always_active: true
    },
    {
    	id: "item.fairy_spirit",
        max: 0,
        images: "/images/items/bottle_fairy.png",
        always_active: true
    },
    {
    	id: "item.fish",
        max: 0,
        images: "/images/items/bottle_fish.png",
        always_active: true
    },
    {
    	id: "item.milk",
        max: 0,
        images: "/images/items/sold_out.png",
        always_active: true
    },
    {
    	id: "item.poe",
        max: 0,
        images: "/images/items/bottle_poe.png",
        always_active: true
    },
    {
    	id: "item.poe_big",
        max: 0,
        images: "/images/items/bottle_poe_big.png",
        always_active: true
    },
    {
    	id: "item.potion_red",
        max: 0,
        images: "/images/items/bottle_potion_red.png",
        always_active: true
    },
    {
    	id: "item.potion_green",
        max: 0,
        images: "/images/items/bottle_potion_green.png",
        always_active: true
    },
    {
    	id: "item.potion_blue",
        max: 0,
        images: "/images/items/bottle_potion_blue.png",
        always_active: true
    }
]