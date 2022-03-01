import { CharacterModel } from '@/models/CharacterModel'
import { SpeedTraitModel } from '@/models/SpeedTraitModel'
import { StrengthTraitModel } from '@/models/StrengthTraitModel'
import { TraitTypeModel } from '@/models/TraitTypeModel'
import { StrengthValueType } from '@/models/StrengthValueType'
import { SpeedValueType } from '@/models/SpeedValueType'

export class ApiMock {
  public async getCharacters (): Promise<CharacterModel[]> {
    // mock a network request
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000))

    // return some mocked data
    return [createCharacterSaitama(), createCharacterGenos(), createCharacterMumen()]
  }
}

function createCharacterSaitama (): CharacterModel {
  const speedTrait: SpeedTraitModel = {
    type: TraitTypeModel.Speed,
    value: SpeedValueType.SpeedOfLight
  }
  const strengthTrait: StrengthTraitModel = {
    type: TraitTypeModel.Strength,
    value: StrengthValueType.SuperStrong
  }

  return {
    id: 'opm1',
    image: 'https://www.looper.com/img/gallery/saitamas-powers-from-one-punch-man-explained/intro-1620848947.jpg',
    name: 'Saitama',
    traits: [speedTrait, strengthTrait]
  }
}

function createCharacterGenos (): CharacterModel {
  const speedTrait: SpeedTraitModel = {
    type: TraitTypeModel.Speed,
    value: SpeedValueType.SpeedOfSound
  }
  const strengthTrait: StrengthTraitModel = {
    type: TraitTypeModel.Strength,
    value: StrengthValueType.SuperStrong
  }

  return {
    id: 'opm2',
    image: 'https://i.pinimg.com/originals/14/19/a5/1419a5619f3a3bc244b82ca56f3623e4.jpg',
    name: 'Genos',
    traits: [speedTrait, strengthTrait]
  }
}

function createCharacterMumen (): CharacterModel {
  const speedTrait: SpeedTraitModel = {
    type: TraitTypeModel.Speed,
    value: SpeedValueType.Goat
  }
  const strengthTrait: StrengthTraitModel = {
    type: TraitTypeModel.Strength,
    value: StrengthValueType.Weak
  }

  return {
    id: 'opm3',
    image: 'https://i.pinimg.com/originals/08/98/bb/0898bb4df29f9aa1593ec6ce1bfc2918.jpg',
    name: 'Mumen Rider',
    traits: [speedTrait, strengthTrait]
  }
}
