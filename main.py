tiles.set_current_tilemap(tilemap("""
    level2
"""))
scene.set_background_color(2)
Smille = sprites.create(assets.image("""
    Smille
"""), SpriteKind.player)
controller.move_sprite(Smille)
scene.camera_follow_sprite(Smille)