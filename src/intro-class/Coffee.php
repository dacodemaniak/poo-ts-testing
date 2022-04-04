<?php
class Coffee {
    private $coffeeType; // Untyped since PHP is not strongly typed
    public $origin;

    public function setCoffeeType(string coffeeType): void {
        if (strtolower($coffeeType) === 'arabica' || strtolower($coffeeType) === 'robusta') {
            $this->coffeeType = ucfirst(strtolower($coffeeType));
        }
    }

    public function getCoffeeType(): ?string {
        echo 'Machin';
        return $this->coffeeType;
    }
}
